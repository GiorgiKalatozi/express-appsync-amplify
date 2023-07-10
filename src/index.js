// variant 2

// import { ApolloServer, gql } from "apollo-server";
// import { startStandaloneServer } from "@apollo/server";
// import { AWSAppSyncClient, AUTH_TYPE } from "aws-appsync";
// import { createHttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";

// // Configure your AWS AppSync endpoint and authentication
// const awsAppSyncConfig = {
//   url: "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
//   region: "eu-central-1",
//   auth: {
//     type: AUTH_TYPE.API_KEY,
//     apiKey: "YOUR_APPSYNC_API_KEY",
//   },
// };

// const httpLink = createHttpLink({
//   uri: awsAppSyncConfig.url,
// });

// const cache = new InMemoryCache();

// // Create an instance of the AWSAppSyncClient
// const awsAppSyncClient = new AWSAppSyncClient({
//   ...awsAppSyncConfig,
//   link: httpLink,
//   cache,
// });

// // Your existing messages array
// const messages = [];

// const typeDefs = gql`
//   type Messages {
//     name: String
//     lastName: String
//     id: ID!
//     message_id: ID!
//     chat_id: ID!
//     user_id: ID!
//     workspace_id: ID!
//     is_initial: Boolean!
//     initiator_id: ID!
//     content: String
//     status: MessagesStatusEnum
//     hidden: Boolean
//     forwarded_from: ID
//     attachment: String
//     replied_to: ID
//     created_at: Int
//     updated_at: Int
//   }

//   enum MessagesStatusEnum {
//     SENT
//     DELIVERED
//     SEEN
//   }

//   type Query {
//     messages: [Messages]
//   }

//   type Subscription {
//     onMessageAdded: Messages
//   }
// `;

// const resolvers = {
//   Query: {
//     messages: () => messages,
//   },
//   Subscription: {
//     onMessageAdded: {
//       subscribe: () =>
//         awsAppSyncClient.subscribe({
//           query: gql`
//             subscription {
//               onMessageAdded {
//                 id
//                 content
//               }
//             }
//           `,
//         }),
//       resolve: (payload) => payload.data.onMessageAdded,
//     },
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// async function startApolloServer() {
//   await server.start();
//   const { url } = await server.listen({ port: 4000 });
//   console.log(`🚀  Server ready at: ${url}`);
// }

// startApolloServer().catch((error) => {
//   console.error("Error starting Apollo Server:", error);
// });

// import { ApolloServer, gql } from "@apollo/server";
// import { AWSAppSyncClient, AUTH_TYPE } from "aws-appsync";
// import { createHttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";

// // Configure your AWS AppSync endpoint and authentication
// const awsAppSyncConfig = {
//   url: "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
//   region: "eu-central-1",
//   auth: {
//     type: AUTH_TYPE.API_KEY,
//     apiKey: "YOUR_APPSYNC_API_KEY",
//   },
// };

// const httpLink = createHttpLink({
//   uri: awsAppSyncConfig.url,
// });

// const cache = new InMemoryCache();

// // Create an instance of the AWSAppSyncClient
// const awsAppSyncClient = new AWSAppSyncClient({
//   ...awsAppSyncConfig,
//   link: httpLink,
//   cache,
// });

// // Your existing messages array
// const messages = [];

// const typeDefs = gql`
//   type Messages {
//     name: String
//     lastName: String
//     id: ID!
//     message_id: ID!
//     chat_id: ID!
//     user_id: ID!
//     workspace_id: ID!
//     is_initial: Boolean!
//     initiator_id: ID!
//     content: String
//     status: MessagesStatusEnum
//     hidden: Boolean
//     forwarded_from: ID
//     attachment: String
//     replied_to: ID
//     created_at: Int
//     updated_at: Int
//   }

//   enum MessagesStatusEnum {
//     SENT
//     DELIVERED
//     SEEN
//   }

//   type Query {
//     messages: [Messages]
//   }

//   type Subscription {
//     onMessageAdded: Messages
//   }
// `;

// const resolvers = {
//   Query: {
//     messages: () => messages,
//   },
//   Subscription: {
//     onMessageAdded: {
//       subscribe: () =>
//         awsAppSyncClient.subscribe({
//           query: gql`
//             subscription {
//               onMessageAdded {
//                 id
//                 content
//               }
//             }
//           `,
//         }),
//       resolve: (payload) => payload.data.onMessageAdded,
//     },
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// async function startApolloServer() {
//   await server.start();
//   const { url } = await server.listen({ port: 4000 });
//   console.log(`🚀  Server ready at: ${url}`);
// }

// startApolloServer().catch((error) => {
//   console.error("Error starting Apollo Server:", error);
// });

// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";

// const messages = [{ name: "gigachad", lastName: "walking w" }];

// const typeDefs = `#graphql

//   # This "Book" type defines the queryable fields for every book in our data source.
//  type Messages {
//     name: String
//     lastName: String
//     id: ID!
//     message_id: ID!
//     chat_id: ID!
//     user_id: ID!
//     workspace_id: ID!
//     is_initial: Boolean!
//     initiator_id: ID!
//     content: String
//     status: MessagesStatusEnum
//     hidden: Boolean
//     forwarded_from: ID
//     attachment: String
//     replied_to: ID
//     created_at: Int
//     updated_at: Int
//   }

//   enum MessagesStatusEnum {
//     SENT
//     DELIVERED
//     SEEN
//     }

//   type Query {
//     messages: [Messages]
//   }
// `;
// // definition and your set of resolvers.

// const resolvers = {
//   Query: {
//     messages: () => messages,
//   },
// };

// const server = new ApolloServer({
//   url: "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
//   typeDefs,
//   resolvers,
// });

// // Passing an ApolloServer instance to the `startStandaloneServer` function:
// //  1. creates an Express app
// //  2. installs your ApolloServer instance as middleware
// //  3. prepares your app to handle incoming requests
// const { url } = await startStandaloneServer(server, {
//   url: "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
//   listen: { port: 4000 },
// });

// console.log(`🚀  Server ready at: ${url}`);

import { buildSchema } from "graphql";
import ws from "ws";
import { useServer } from "graphql-ws/lib/use/ws";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
  type Subscription {
    greetings: String
  }
`);

// The roots provide resolvers for each GraphQL operation
const roots = {
  query: {
    hello: () => "Hello World!",
  },
  subscription: {
    greetings: async function* sayHiIn5Languages() {
      for (const hi of ["Hi", "Bonjour", "Hola", "Ciao", "Zdravo"]) {
        yield { greetings: hi };
      }
    },
  },
};

const server = new ws.Server({
  port: 4000,
  path: "/graphql",
});

useServer(
  // from the previous step
  { schema, roots },
  server
);

console.log("Listening to port 4000");
