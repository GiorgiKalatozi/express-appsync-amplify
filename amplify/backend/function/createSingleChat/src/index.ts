import { default as fetch, Request } from 'node-fetch';
import { CreateSingleChat } from "./types/create-single-chat.type";
import { Payload } from "./types/payload.type";
import { v5 as uuidv5 } from 'uuid';
import { createHash } from 'node:crypto'

const GRAPHQL_ENDPOINT = <string> process.env['GRAPHQL_ENDPOINT'];
const GRAPHQL_API_KEY = <string> process.env['GRAPHQL_API_KEY'];

const sha256ToUuid = (sha: string): string => {
  const namespace = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
  const hashBuffer = Buffer.from(sha, 'hex');

  return uuidv5(hashBuffer, namespace);
}

const generateSha256 = (user_for_chat_duplicate: string, user_id_with_chat: string, workspace_id: string): string => {
  const sha = createHash('sha256').update(`${ user_for_chat_duplicate }-${ user_id_with_chat }-${ workspace_id }`).digest('hex')
  return sha256ToUuid(sha);
}

const createSingleChat = async (variables: { input: CreateSingleChat }) => {
  const query = `
  mutation createSingleChats($input: CreateSingleChatsInput!) {
    createSingleChats(
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
      singleChatsTitleId
      type
      title_initials
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
    body: JSON.stringify({query, variables})
  };

  const request = new Request(GRAPHQL_ENDPOINT, options);

  try {
    const response = await fetch(request);
    return await response.json();
  } catch (err) {
    console.log('CATCH ERROR', err)
    throw err;
  }
}

export const handler = async (event: Payload): Promise<void> => {
  const record = event.Records[0]
  const chatImage = record.dynamodb.NewImage

  if(record.eventName === 'INSERT') {
    if (chatImage.is_initial.BOOL) {
      // @ts-ignore
      const chat_members: [string] = chatImage.chat_members.L.map(member => member.S)
      const created_at = Date.now();

      const user_for_chat_duplicate = chat_members.filter(user => user !== chatImage.owner_id.S)[0];
      const sha256 = generateSha256(user_for_chat_duplicate, chatImage.user_id.S, chatImage.workspace_id.S);

      const newChat: CreateSingleChat = {
        id: sha256,
        chat_id: chatImage.chat_id.S,
        chat_members,
        color: chatImage.color.S,
        is_active: chatImage.is_active.BOOL,
        is_initial: false,
        owner_id: chatImage.user_id.S,
        singleChatsTitleId: chatImage.singleChatsTitleId.S,
        title_initials: chatImage.title_initials.S,
        type: chatImage.type.S,
        user_id: chatImage.user_id.S,
        workspace_id: chatImage.workspace_id.S,
        is_admin: true,
        created_at,
      }

      await createSingleChat({ input: newChat })
    }
  }
};