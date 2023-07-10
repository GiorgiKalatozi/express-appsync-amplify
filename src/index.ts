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

/// variant 2

// import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";
// // import { SubscriptionClient } from "subscriptions-transport-ws";
// import { split } from "apollo-link";
// import { WebSocketLink } from "@apollo/client/link/ws";
// import { createHttpLink } from "apollo-link-http";
// import { getMainDefinition } from "@apollo/client/utilities";

// // Set up the WebSocket link
// const wsLink = new WebSocketLink({
//   uri: "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
//   options: {
//     reconnect: true,
//     connectionParams: {
//       headers: {
//         Authorization: "<your-auth-token>",
//       },
//     },
//   },
// });

// // Set up the HTTP link
// const httpLink = createHttpLink({
//   uri: "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
// });

// // Create the Apollo Client and configure the link
// const link = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     );
//   },
//   wsLink,
//   httpLink
// );

// const apolloClient = new ApolloClient({
//   link,
//   cache: new InMemoryCache(),
// });

// // Set up the subscription
// const subscription = apolloClient.subscribe({
//   query: gql`
//     subscription OnMessageAdded {
//       onMessageAdded {
//         id
//         text
//       }
//     }
//   `,
// });

// subscription.subscribe({
//   next: (data: any) => {
//     console.log("Received new message:", data);
//     // Process the new message data here
//   },
//   error: (error: any) => {
//     console.error("Error in subscription:", error);
//   },
// });

// import express, { Request, Response } from "express";
// import AWSAppSyncClient from "aws-appsync";
// import { gql } from "graphql-tag";
// import fetch from "node-fetch";
// import { createHttpLink } from "apollo-link-http";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// createHttpLink({ uri: "/graphql", fetch: fetch as any });

// const awsAppSyncClient = new AWSAppSyncClient.default({
//   url: "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
//   region: "eu-central-1",
//   auth: {
//     type: "API_KEY",
//     apiKey: "da2-ocri2idwujafvhh4ehse42ou3u",
//   },
// });

// const app = express();
// const port = 3000;

// app.get("/messages", async (req: Request, res: Response) => {
//   const query = gql`
//     query {
//       listMessages {
//         items {
//           id
//           content
//           timestamp
//         }
//       }
//     }
//   `;
//   try {
//     const response = await awsAppSyncClient.query({ query });
//     const messages = response.data;
//     console.log(messages);
//     res.json(messages);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while fetching messages." });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// import express from "express";
// import { ApolloServer, gql } from "apollo-server-express";
// // import { createHttpLink } from "apollo-link-http";
// // import fetch from "node-fetch";
// import { ApolloClient, InMemoryCache } from "@apollo/client/core/index.js";
// // import { split } from "@apollo/client/link/core";
// // import { split, HttpLink } from "@apollo/client";
// import { HttpLink } from "apollo-link-http";
// import { getMainDefinition } from "@apollo/client/utilities";
// import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
// import { createClient } from "graphql-ws";
// import split from "apollo-client";
// // import { getMainDefinition } from "apollo-utilities";
// // import { WebSocketLink } from "apollo-link-ws";

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

// const httpLink = new HttpLink({ uri: "/graphql", fetch });

// const wsLink = new GraphQLWsLink(
//   createClient({
//     url: "wss://bs6z527jgvah3oy2cx3pdjmkvy.appsync-realtime-api.eu-central-1.amazonaws.com/graphql",
//   })
// );

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: httpLink,
// });

// // The split function takes three parameters:
// //
// // * A function that's called for each operation to execute
// // * The Link to use for an operation if the function returns a "truthy" value
// // * The Link to use for an operation if the function returns a "falsy" value
// const splitLink = split(
//   ({ query }: any) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     );
//   },
//   wsLink,
//   httpLink
// );

// const response = await client.query({
//   query: gql`
//     query {
//       listMessages {
//         items {
//           id
//           content
//           timestamp
//       }
//     }
//   `,
// });

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
//     // link: createHttpLink({
//     //   uri: "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
//     //   fetch: fetch as any,
//     //   // headers: {
//     //   //   // Set your AppSync authentication token here (e.g., Cognito JWT)
//     //   //   Authorization: "<your-auth-token>",
//     //   // },
//     // }),
//     // cache: new InMemoryCache(),
//     link: splitLink,
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
// import express from "express";
// import { ApolloServer, gql } from "apollo-server-express";
// // import { ApolloClient, InMemoryCache, split } from "@apollo/client";
// import { ApolloClient, InMemoryCache } from "@apollo/client/core";
// import { split } from "@apollo/client/link/core";
// import { HttpLink } from "apollo-link-http";
// import { getMainDefinition } from "@apollo/client/utilities";
// import { WebSocketLink } from "@apollo/client/link/ws";
// import { createClient } from "graphql-ws";

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

// const httpLink = new HttpLink({ uri: "/graphql" });

// const wsLink = new WebSocketLink(
//   createClient({
//     url: "wss://bs6z527jgvah3oy2cx3pdjmkvy.appsync-realtime-api.eu-central-1.amazonaws.com/graphql",
//   })
// );

// const splitLink = split(
//   ({ query }: any) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     );
//   },
//   wsLink,
//   httpLink
// );

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
//     link: splitLink,
//     cache: new InMemoryCache(),
//   });

//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: { client: apolloClient },
//   });

//   await server.start();

//   server.applyMiddleware({ app });

//   const port = 4000;
//   app.listen(port, () => {
//     console.log(`🚀 Server ready at http://localhost:${port}`);
//   });
// }

// startServer();

// import { ApolloClient, InMemoryCache } from "@apollo/client/core";
// import { WebSocketLink } from "apollo-link-ws";
// import { SubscriptionClient } from "subscriptions-transport-ws";
// import { split } from "apollo-link";
// import { getMainDefinition } from "apollo-utilities";
// import { HttpLink } from "apollo-link-http";

// // Define your subscription query
// const subscriptionQuery = gql`
//   subscription {
//     // Define your subscription query here
//   }
// `;

// async function runSubscription() {
//   const httpLink = new HttpLink({ uri: "/graphql" });

//   const wsLink = new WebSocketLink({
//     uri: "wss://your-appsync-endpoint",
//     options: {
//       reconnect: true,
//       connectionParams: {
//         // Include any necessary authentication parameters
//         // (e.g., AWS access key, Cognito JWT, etc.)
//       },
//     },
//   });

//   const subscriptionClient = new SubscriptionClient(
//     "wss://your-appsync-endpoint",
//     {
//       // Include any necessary authentication parameters
//       // (e.g., AWS access key, Cognito JWT, etc.)
//     }
//   );

//   const splitLink = split(
//     ({ query }) => {
//       const definition = getMainDefinition(query);
//       return (
//         definition.kind === "OperationDefinition" &&
//         definition.operation === "subscription"
//       );
//     },
//     wsLink,
//     httpLink
//   );

//   const client = new ApolloClient({
//     link: splitLink,
//     cache: new InMemoryCache(),
//   });

//   const subscription = client.subscribe({
//     query: subscriptionClient,
//   });

//   subscription.subscribe({
//     next(data: any) {
//       // Handle the received subscription data
//       console.log(data);
//     },
//     error(error: any) {
//       // Handle any subscription errors
//       console.error(error);
//     },
//   });
// }

// runSubscription().catch((error) => {
//   console.error("An error occurred:", error);
// });
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
