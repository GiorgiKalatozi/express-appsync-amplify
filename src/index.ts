/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Amplify, API, graphqlOperation } from "aws-amplify";
// import { GraphQLSubscription, GraphQLQuery } from "@aws-amplify/api";
// import { onCreateMessages } from "./graphql/subscriptions.js";
// import { ListMessagesQuery, OnCreateMessagesSubscription } from "./API.js";
// import express from "express";
// import { CONNECTION_STATE_CHANGE, ConnectionState } from "@aws-amplify/pubsub";
// import { Hub } from "aws-amplify";

// console.log("hii");

// Amplify.configure({
//   aws_project_region: "eu-central-1",
//   aws_appsync_graphqlEndpoint:
//     "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
//   aws_appsync_region: "eu-central-1",
//   aws_appsync_authenticationType: "API_KEY",
//   aws_appsync_apiKey: "da2-ocri2idwujafvhh4ehse42ou3u",
//   aws_cognito_identity_pool_id:
//     "eu-central-1:98172429-759e-43fa-bb21-23f8e8352f3e",
//   aws_cognito_region: "eu-central-1",
//   aws_user_pools_id: "eu-central-1_j9srAObkl",
//   aws_user_pools_web_client_id: "1tb0j7fpn4ttbbd4r68qv3dh7u",
//   oauth: {
//     domain: "lavaping-development.auth.eu-central-1.amazoncognito.com",
//   },
//   aws_cognito_username_attributes: ["EMAIL"],
//   aws_cognito_social_providers: [],
//   aws_cognito_signup_attributes: ["EMAIL"],
//   aws_cognito_mfa_configuration: "OPTIONAL",
//   aws_cognito_mfa_types: ["TOTP"],
//   aws_cognito_password_protection_settings: {
//     passwordPolicyMinLength: 8,
//     passwordPolicyCharacters: [
//       "REQUIRES_LOWERCASE",
//       "REQUIRES_UPPERCASE",
//       "REQUIRES_NUMBERS",
//       "REQUIRES_SYMBOLS",
//     ],
//   },
//   aws_cognito_verification_mechanisms: ["EMAIL"],
//   aws_user_files_s3_bucket: "lavaping-web-storage-b0f884a6115332-staging",
//   aws_user_files_s3_bucket_region: "eu-central-1",
// });
// const fetchRecentData = async () => {
//   // Retrieve some/all data from AppSync
//   const allTodos = await API.graphql<GraphQLQuery<ListMessagesQuery>>({
//     query: "giorgi gigachadishvili",
//   });

//   console.log(allTodos);
// };

// // Create an Express.js app
// const app = express();

// // Define a route to handle incoming messages
// app.post("/messages", (req, res) => {
//   // Handle the incoming message
//   console.log("Received a new message:", req.body);

//   // You can perform additional logic here, such as saving the message to a database

//   res.sendStatus(200); // Send a response indicating successful processing
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// let priorConnectionState: ConnectionState;

// Hub.listen("api", (data: any) => {
//   const { payload } = data;
//   if (payload.event === CONNECTION_STATE_CHANGE) {
//     if (
//       priorConnectionState === ConnectionState.Connecting &&
//       payload.data.connectionState === ConnectionState.Connected
//     ) {
//       fetchRecentData();
//     }
//     priorConnectionState = payload.data.connectionState;

//     switch (payload.data.connectionState) {
//       case ConnectionState.Connecting:
//         console.log("Connection is being established...");
//         break;
//       case ConnectionState.Connected:
//         console.log("Connection established!");
//         break;
//       case ConnectionState.Disconnecting:
//         console.log("Connection is being disconnected...");
//         break;
//       case ConnectionState.Disconnected:
//         console.log("Connection disconnected.");
//         break;
//       default:
//         break;
//     }
//   }
// });

// // Subscribe to creation of Messages
// const createSub = API.graphql<
//   GraphQLSubscription<OnCreateMessagesSubscription>
// >(graphqlOperation(onCreateMessages)).subscribe({
//   next: (data) => console.log(data),
//   error: (error) => console.log(error),
// });

// Hub.listen("api", (data: any) => {
//   const { payload } = data;
//   if (payload.event === CONNECTION_STATE_CHANGE) {
//     const connectionState = payload.data.connectionState as ConnectionState;
//     console.log("Connection state:", connectionState);
//     console.log(payload.message, "payload data");
//   }
// });

// import express from "express";
// import { ApolloServer, gql } from "apollo-server-express";
// import { AWSAppSyncClient } from "aws-appsync";

// // Create an instance of the Express server
// const app = express();

// // Define your GraphQL schema
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }

//   type Subscription {
//     onMessageAdded: String
//   }
// `;

// // Define the resolver functions
// const resolvers = {
//   Query: {
//     hello: () => "Hello, world!",
//   },
//   Subscription: {
//     onMessageAdded: {
//       subscribe: (_: any, __: any, { appSyncClient }: any) => {
//         return appSyncClient.subscribe({
//           query: gql`
//             subscription {
//               onMessageAdded {
//                 message
//               }
//             }
//           `,
//         });
//       },
//     },
//   },
// };

// // Configure AWS AppSync client
// const appSyncClient = new AWSAppSyncClient({
//   url: "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
//   region: "eu-central-1",
//   auth: {
//     type: "AWS_IAM",
//     credentials: {
//       accessKeyId: "AKIATJRIWQW4KCUN7EOA",
//       secretAccessKey: "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",
//     },
//   },
// });

// // Create Apollo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: () => ({ appSyncClient }),
// });

// // Start the server and apply middleware
// async function startServer() {
//   await server.start();
//   server.applyMiddleware({ app });
// }

// // Call the startServer function
// startServer().catch((error) => {
//   console.error("Error starting the server:", error);
// });

// // Start the server
// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000/graphql");
// });

// import express from "express";
// import { ApolloServer, gql } from "apollo-server-express";
// import { createHttpLink } from "apollo-link-http";
// import fetch from "node-fetch";
// import { ApolloClient, InMemoryCache } from "@apollo/client/core/index.js";

// // Define your GraphQL schema
// const typeDefs = gql`
//   type Message {
//     id: ID!
//     content: String!
//   }

//   type Query {
//     getMessage(id: ID!): Message
//   }

//   type Mutation {
//     createMessage(content: String!): Message
//   }
// `;

// console.log("hello world!");

// // Define your resolvers
// const resolvers = {
//   Query: {
//     getMessage: (_: any, { id }: { id: string }) => {
//       // Implement your logic to fetch a message by ID from the Messages table
//       const message = {
//         id,
//         content: "Hello, World!",
//       };
//       return message;
//     },
//   },
//   Mutation: {
//     createMessage: (_: any, { content }: { content: string }) => {
//       // Implement your logic to create a new message in the Messages table
//       const message = {
//         id: "123",
//         content,
//       };
//       console.log(message, "message");

//       return message;
//     },
//   },
// };

// async function startServer() {
//   const app = express();

//   const apolloClient = new ApolloClient({
//     link: createHttpLink({
//       uri: "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
//       fetch: fetch as any,
//       // headers: {
//       //   // Set your AppSync authentication token here (e.g., Cognito JWT)
//       //   Authorization: "<your-auth-token>",
//       // },
//     }),
//     cache: new InMemoryCache(),
//   });

//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: { client: apolloClient },
//   });

//   await server.start();

//   server.applyMiddleware({ app });

//   console.log(server, "server");

//   const port = 4000;
//   app.listen(port, () => {
//     console.log(`🚀 Server ready at http://localhost:${port}`);
//   });
// }

// startServer();

import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";
// import { SubscriptionClient } from "subscriptions-transport-ws";
import { split } from "apollo-link";
import { WebSocketLink } from "@apollo/client/link/ws";
import { createHttpLink } from "apollo-link-http";
import { getMainDefinition } from "@apollo/client/utilities";

// Set up the WebSocket link
const wsLink = new WebSocketLink({
  uri: "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        Authorization: "<your-auth-token>",
      },
    },
  },
});

// Set up the HTTP link
const httpLink = createHttpLink({
  uri: "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
});

// Create the Apollo Client and configure the link
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

// Set up the subscription
const subscription = apolloClient.subscribe({
  query: gql`
    subscription OnMessageAdded {
      onMessageAdded {
        id
        text
      }
    }
  `,
});

subscription.subscribe({
  next: (data: any) => {
    console.log("Received new message:", data);
    // Process the new message data here
  },
  error: (error: any) => {
    console.error("Error in subscription:", error);
  },
});
