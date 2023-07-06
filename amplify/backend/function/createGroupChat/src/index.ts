import { default as fetch, Request } from 'node-fetch';
import { CreateChat } from "./types/create-chat.type";
import { Payload } from "./types/payload.type";

const GRAPHQL_ENDPOINT = <string> process.env['GRAPHQL_ENDPOINT'];
const GRAPHQL_API_KEY = <string> process.env['GRAPHQL_API_KEY'];

const createChat = async (variables: { input: CreateChat }) => {

  const query = `
  mutation createChats($input: CreateChatsInput!) {
    createChats(
      input: $input
    ) {
        _deleted
        _lastChangedAt
        _version
        chat_id
        chat_members
        color
        createdAt
        created_at
        id
        is_active
        is_admin
        is_initial
        muted_until
        owner_id
        title
        title_initials
        type
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
  const chatImage = record.dynamodb.NewImage
  if(record.eventName === 'INSERT') {
    if (chatImage.is_initial.BOOL) {
      const created_at = Date.now();
      // @ts-ignore
      const chat_members: [string] = chatImage.chat_members.L.map(member => member.S)

      const newChat: CreateChat = {
        chat_id: chatImage.chat_id.S,
        chat_members,
        color: chatImage.color.S,
        is_active: chatImage.is_active.BOOL,
        is_initial: false,
        owner_id: chatImage.owner_id.S,
        title: chatImage.title.S,
        title_initials: chatImage.title_initials.S,
        type: chatImage.type.S,
        user_id: chatImage.user_id.S,
        workspace_id: chatImage.workspace_id.S,
        is_admin: false,
        created_at,
      }

      await Promise.all(
        newChat.chat_members.map(async member => {
          if (member !== newChat.user_id) {
            newChat.user_id = member;
            await createChat({ input: newChat })
          }
        })
      )
    }
  }
};