import { default as fetch, Request } from "node-fetch";
import { CreateMessage } from "./types/message.type";
import { ChatMembersResponse } from "./types/chat-members-response.type";
import { Payload } from "./types/payload.type";

const GRAPHQL_ENDPOINT = <string> process.env['GRAPHQL_ENDPOINT'];
const GRAPHQL_API_KEY = <string> process.env['GRAPHQL_API_KEY'];

const getChatMembers = async (
    chat_id: String,
    user_id: String
): Promise<String[]> => {
  const query = `
    query listChats($filter: ModelChatsFilterInput!) {
     listChats(filter: $filter, limit: 1000) {
      items {
        chat_members
      }
    }
  }
`;

  const filter = {
    and: { chat_id: { contains: chat_id }, user_id: { contains: user_id } },
  };

  const options = {
    method: "POST",
    headers: {
      "x-api-key": GRAPHQL_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { filter } }),
  };

  const request = new Request(GRAPHQL_ENDPOINT, options);

  const response = await fetch(request);
  const jsonResponse: ChatMembersResponse = <ChatMembersResponse>(await response.json());
  return jsonResponse.data.listChats.items[0].chat_members;
};

const createUnreadMessages = async (variables: { input: CreateMessage }) => {
  const query = `
  mutation createUnreadMessages($input: CreateUnreadMessagesInput!) {
    createUnreadMessages(
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
    method: "POST",
    headers: {
      "x-api-key": GRAPHQL_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  const request = new Request(GRAPHQL_ENDPOINT, options);

  const response = await fetch(request);
  console.log('RESPONSE', await response.json())
  return await response.json();
};

export const handler = async (event: Payload) => {
  const record = event.Records[0];
  const newMessageImage = record.dynamodb.NewImage;

  if (record.eventName === "INSERT") {
    if (newMessageImage.is_initial.BOOL) {
      const newMessage: CreateMessage = {
        user_id: newMessageImage.user_id.S,
        message_id: newMessageImage.message_id.S,
        chat_id: newMessageImage.chat_id.S,
        workspace_id: newMessageImage.workspace_id.S,
        is_initial: false,
        content: newMessageImage.content.S,
        initiator_id: newMessageImage.initiator_id.S,
        status: newMessageImage.status.S,
        hidden: false,
        forwarded_from: newMessageImage.forwarded_from === undefined ? "" : newMessageImage.forwarded_from.S,
        replied_to: newMessageImage?.replied_to?.S,
        attachment: "",
        created_at: +newMessageImage.created_at.N,
      };

      const chatMembers = await getChatMembers(
        newMessage.chat_id,
        newMessage.user_id
      );

      await Promise.all(
        chatMembers.map(async (member) => {
          if (member !== newMessageImage.user_id.S) {
            newMessage.user_id = member.toString();
            await createUnreadMessages({ input: newMessage });
          }
        })
      );
    }
  }
};
