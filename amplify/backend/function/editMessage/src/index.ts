import { default as fetch, Request } from 'node-fetch';
import { UpdateMessage } from "./types/message.type";
import { Payload } from "./types/payload.type";
import {GetUnreadMessagesResponse} from "./types/get-unread-messages-response.type";
import {GetMessagesResponse} from "./types/get-messages-response.type";

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
        _deleted
        _lastChangedAt
        _version
        attachment
        chat_id
        content
        createdAt
        created_at
        forwarded_from
        replied_to
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

const updateMessage = async (variables: { input: UpdateMessage }, updateUnreadMessage: boolean) => {

  const updateMessageInput = updateUnreadMessage ? 'UpdateUnreadMessagesInput!' : 'UpdateMessagesInput!'
  const mutationName = updateUnreadMessage ? 'updateUnreadMessages' : 'updateMessages'

  const query = `
  mutation ${mutationName}($input: ${ updateMessageInput }) {
    ${ mutationName }(
      input: $input
    ) {
      _deleted
      _lastChangedAt
      attachment
      _version
      chat_id
      content
      createdAt
      created_at
      forwarded_from
      replied_to
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
  return await response.json();
}

export const handler = async (event: Payload) => {
  const record = event.Records[0]
  const updatedMessageImage = record.dynamodb.NewImage

  if(record.eventName === 'MODIFY') {

    if (updatedMessageImage.is_initial.BOOL && updatedMessageImage?._deleted === undefined) {

      const updatedMessage: UpdateMessage = {
        id: updatedMessageImage.id.S,
        message_id: updatedMessageImage.message_id.S,
        content: updatedMessageImage.content.S,
        status: updatedMessageImage.status.S,
        hidden: false,
        attachment: "",
        _version: +updatedMessageImage._version.N
      }

      const unreadMessages = <GetUnreadMessagesResponse> await getMessages(updatedMessage.message_id, true)
      const messages = <GetMessagesResponse> await getMessages(updatedMessage.message_id, false)
      await Promise.all(
        unreadMessages.data.listUnreadMessages.items.map(async e => {
          updatedMessage.id = e.id;
          updatedMessage._version = e._version;
          await updateMessage({ input: updatedMessage }, true)
        })
      )
      await Promise.all(
        messages.data.listMessages.items.map(async e => {
          updatedMessage.id = e.id;
          updatedMessage._version = e._version;
          if(e.is_initial == false) {
            await updateMessage({ input: updatedMessage }, false)
          }
        })
      )
    }
  }
};
