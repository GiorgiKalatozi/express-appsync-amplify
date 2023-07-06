import { default as fetch, Request } from 'node-fetch';
import { NewImage, Payload } from "./dto/payload.type";
import { GraphQLRequestDto } from "./dto/grapql-request.dto";
import { MessageActionEnum } from "../../../../../src/models";
import { generateSha256 } from "./sha256-generator";
import { listMessages } from "../../../../../src/graphql/queries";
import {createDeliveredMessages, updateMessages} from "../../../../../src/graphql/mutations";
import { ListMessages } from "./types/list-messages.type";
import { CreateDeliveredMessages } from "./types/create-delivered-messages.type";

const GRAPHQL_ENDPOINT = <string> process.env['GRAPHQL_ENDPOINT'];
const GRAPHQL_API_KEY = <string> process.env['GRAPHQL_API_KEY'];

const sendGraphQLRequest = async (data: GraphQLRequestDto): Promise<any> => {
  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  const request = new Request(GRAPHQL_ENDPOINT, options);

  try {
    const response = await fetch(request);
    const responseJson =  await response.json();
    console.log('RESPOOOONSE', responseJson);
  } catch (err) {
    console.log('CATCH ERROR', err)
    throw err;
  }
}
const getMessages = async (message_id: string): Promise<ListMessages> =>  {
  const graphqlRequestData : GraphQLRequestDto = {
    query: listMessages,
    variables: {
      filter: {
        message_id: {
          contains: message_id
        }
      },
      limit: 100000
    }
  };
  return await sendGraphQLRequest(graphqlRequestData)
}

const deliveredMessagesHandler = async (data: NewImage) => {
  const primaryId = generateSha256(`${ data.user_id.S }-${ data.message_id.S }`);
  const deliveredData: CreateDeliveredMessages = {
    id: primaryId,
    deliverer_id: data.user_id.S,
    message_id: data.message_id.S,
    owner_id: data.message_owner.S,
    delivered_at: +data.created_at.N
  }

  const requestData: GraphQLRequestDto = {
    query: createDeliveredMessages,
    variables: {
      input: deliveredData
    }
  }

  await sendGraphQLRequest(requestData)

  const queryMessages: ListMessages = await getMessages(data.message_id.S);
  const messages =  queryMessages.data.listMessages.items;
  const initialMessage = messages.find(item => item.is_initial);

  if(initialMessage) {
    console.log('IIIIIIIFFFFFF', initialMessage)
    const updateStatus: GraphQLRequestDto = {
      query: updateMessages,
      variables: {
        input: {
          id: initialMessage.message_id,
          type: "DELIVERED"
        }
      }
    }
    await sendGraphQLRequest(updateStatus)
  }
}

export const handler = async (event: Payload): Promise<void> => {
  const record = event.Records[0]
  const recordImage = record.dynamodb.NewImage
  switch (recordImage.action.S) {
    case MessageActionEnum.DELIVER_MESSAGE:
      await deliveredMessagesHandler(recordImage);
      break;
    case MessageActionEnum.SEEN_MESSAGE:
      await deliveredMessagesHandler(recordImage);
      break;
    case MessageActionEnum.TRANSFER_MESSAGE:
      await deliveredMessagesHandler(recordImage);
      break;
    default:
      console.log('INVALID ACTION')
      break;
  }
};