import { default as fetch, Request } from 'node-fetch';
import { GetUnreadMessagesResponse } from "./types/get-unread-messages-response.type";
import { GetMessagesResponse } from "./types/get-messages-response.type";
import { Payload } from "./types/payload.type";
import {DeleteMessage} from "./types/delete-message.type";

const GRAPHQL_ENDPOINT = <string> process.env['GRAPHQL_ENDPOINT'];
const GRAPHQL_API_KEY = <string> process.env['GRAPHQL_API_KEY'];

const getMessages = async (message_id: string, getUnreadMessage: boolean) => {

  const filterName = getUnreadMessage ? 'ModelUnreadMessagesFilterInput' : 'ModelMessagesFilterInput'
  const queryName = getUnreadMessage ? 'listUnreadMessages' : 'listMessages'

  const query = `
  query ${queryName}($filter: ${ filterName }) {
    ${ queryName }(
      filter: $filter
      limit: 1000
    ) {
      items {
        id
        is_initial
        message_id
        _deleted
        _lastChangedAt
        _version
        createdAt
        updatedAt
      }
    }
  }
`;

  const filter = { message_id: { contains: message_id } };
  const limit = { limit: 1000 };

  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables: { filter, limit } })
  };

  const request = new Request(GRAPHQL_ENDPOINT, options);

  try {
    const response = await fetch(request);
    const jsonResponse = <GetUnreadMessagesResponse | GetMessagesResponse> await response.json();
    return await jsonResponse;
  } catch (error) {
    throw error
  }
}

const deleteMessage = async (variables: { input: DeleteMessage }, deleteUnreadMessage: boolean) => {
  const deleteMessageInput = deleteUnreadMessage ? 'DeleteUnreadMessagesInput!' : 'DeleteMessagesInput!'
  const mutationName = deleteUnreadMessage ? 'deleteUnreadMessages' : 'deleteMessages'

  const query = `
  mutation ${ mutationName }($input: ${ deleteMessageInput }) {
    ${ mutationName }(
      input: $input
    ) {
       _deleted
      _lastChangedAt
      _version
      attachment
      chat_id
      content
      createdAt
      created_at
      forwarded_from
      hidden
      id
      initiator_id
      is_initial
      message_id
      status
      updatedAt
      user_id
      workspace_id
    }
  }
`;

  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, variables })
  };

  const request = new Request(GRAPHQL_ENDPOINT, options);

  const response = await fetch(request);
  console.log('RESPONSE', await response.json())
  return await response.json();
}

export const handler = async (event: Payload) => {
  const record = event.Records[0];
  const messageImage = record.dynamodb.NewImage;
  if(record.eventName === 'MODIFY' && record.dynamodb.NewImage._deleted.BOOL && record.dynamodb.OldImage['_deleted'] === undefined) {
    console.log('IF', record.dynamodb)
    if (messageImage.is_initial.BOOL) {

      const unreadMessages = <GetUnreadMessagesResponse> await getMessages(messageImage.message_id.S, true)
      const messages = <GetMessagesResponse> await getMessages(messageImage.message_id.S, false)

      await Promise.all(
          unreadMessages.data.listUnreadMessages.items.map(async e => {
            const deletedMessage: DeleteMessage = {
              id: e.id,
              _version: e._version,
            }

            await deleteMessage({ input: deletedMessage }, true)
          })
      )

      await Promise.all(
          messages.data.listMessages.items.map(async e => {
            const deletedMessage: DeleteMessage = {
              id: e.id,
              _version: e._version,
            }

            await deleteMessage({ input: deletedMessage }, false)
          })
      )
    }
  }
};