/* eslint-disable @typescript-eslint/no-explicit-any */
// import express from "express";
// import { AppSyncClient } from "@aws-sdk/client-appsync";
// import { createServer } from "http";
// import { execute, subscribe } from "graphql";
// import { SubscriptionServer } from "subscriptions-transport-ws";
// import { makeExecutableSchema } from "@graphql-tools/schema";

// // AWS AppSync configuration
// const appSyncConfig = {
//   url: "YOUR_APPSYNC_API_URL",
//   region: "YOUR_AWS_REGION",
//   auth: {
//     type: "API_KEY",
//     apiKey: "YOUR_APPSYNC_API_KEY",
//   },
// };

// // The GraphQL schema
// const typeDefs = `
//   type Query {
//     hello: String
//     lavapi: String
//     sayMyName: String
//   }

//   type Subscription {
//     onCreateMessage: Message
//   }

//   type Message {
//     id: ID!
//     content: String
//     createdAt: String
//   }
// `;

// // A map of functions which return data for the schema
// const resolvers = {
//   Query: {
//     hello: () => "Hello World",
//     lavapi: () => "LavaPi",
//     sayMyName: () => "Say My Name",
//   },
//   Subscription: {
//     onCreateMessage: {
//       subscribe: () => {
//         // Logic to subscribe to "Messages" table changes
//         // Return an AsyncIterator that emits new messages
//       },
//     },
//   },
// };

// // Create an Express.js app
// const app = express();

// // Set up AppSync client
// const appSyncClient = new AppSyncClient(appSyncConfig);

// // Create a HTTP server
// const httpServer = createServer(app);

// // Create the executable schema
// const schema = makeExecutableSchema({ typeDefs, resolvers });

// // Create the WebSocket server for subscriptions
// const subscriptionServer = SubscriptionServer.create(
//   {
//     schema,
//     execute,
//     subscribe,
//   },
//   {
//     server: httpServer,
//     path: "/subscriptions",
//   }
// );

// // Start the server
// httpServer.listen({ port: 4000 }, () => {
//   console.log("Server listening on port 4000");
// });

// import express from "express";
// import { API } from "aws-amplify";

// // AWS AppSync configuration
// const appSyncConfig = {
//   aws_project_region: "YOUR_AWS_REGION",
//   aws_appsync_graphqlEndpoint: "YOUR_APPSYNC_API_URL",
//   aws_appsync_authenticationType: "API_KEY",
//   aws_appsync_apiKey: "YOUR_APPSYNC_API_KEY",
// };

// // Create an Express.js app
// const app = express();

// // Configure AWS Amplify
// API.configure(appSyncConfig);

// // Subscribe to "Messages" table changes

// // Define a route to retrieve the messages
// app.get("/messages", async (req, res) => {
//   // Query messages from the AppSync API or any other data source
//   // const messages = await fetchMessagesFromDataSource();
//   const messages = { name: "lavapi" };

//   res.json(messages);
// });

// // Start the server
// app.listen({ port: 4000 }, () => {
//   console.log("Server listening on port 4000");
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
//   url: "YOUR_APPSYNC_API_URL",
//   region: "YOUR_AWS_REGION",
//   auth: {
//     type: "AWS_IAM",
//     credentials: {
//       accessKeyId: "YOUR_AWS_ACCESS_KEY",
//       secretAccessKey: "YOUR_AWS_SECRET_ACCESS_KEY",
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
// import { AWSAppSyncClient } from "aws-appsync";
// import { DynamoDBStreams } from "aws-sdk";

// // Create an instance of the Express server
// const app = express();

// // Define your GraphQL schema
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }

//   type Subscription {
//     onMessageAdded: Message
//   }

//   type Message {
//     id: ID!
//     content: String!
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
//         const ddbStreamsClient = new DynamoDBStreams({
//           region: "eu-central-1",
//         }); // Replace with your AWS region
//         const streamArn = "YOUR_DYNAMODB_STREAM_ARN"; // Replace with your DynamoDB stream ARN

//         const params = {
//           StreamArn: streamArn,
//           ShardId: "shardId", // Replace with your DynamoDB shard ID
//           ShardIteratorType: "LATEST",
//         };

//         const processRecords = async () => {
//           try {
//             const iterator = await ddbStreamsClient
//               .getShardIterator(params)
//               .promise();
//             const iteratorParams = {
//               ShardIterator: iterator.ShardIterator,
//               Limit: 100, // Set the desired batch size
//             };

//             // eslint-disable-next-line no-constant-condition
//             while (true) {
//               const records = await ddbStreamsClient.getRecords().promise();

//               for (const record of records.Records || []) {
//                 if (record) {
//                   const message = {
//                     id: 1,
//                     content: 2,
//                   };

//                   appSyncClient.publish({
//                     query: gql`
//                       subscription {
//                         onMessageAdded {
//                           id: ${message.id}
//                           content: ${message.content}
//                         }
//                       }
//                     `,
//                     variables: {},
//                   });
//                 }
//               }

//               iteratorParams.ShardIterator = records.NextShardIterator;
//             }
//           } catch (error) {
//             console.error("Error processing records:", error);
//           }

//           processRecords(); // Continuously process new records
//         };

//         processRecords(); // Start processing records

//         // Return an empty async iterator as per the GraphQL subscription format
//         return {
//           [Symbol.asyncIterator]: () => ({
//             next: () =>
//               new Promise((resolve) => {
//                 console.log(resolve);
//               }),
//           }),
//         };
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
// credentials: {
//   accessKeyId: "AKIATJRIWQW4KCUN7EOA",
//   secretAccessKey: "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",
// },
//   },
// });

// // Create Apollo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: () => ({ appSyncClient }),
// });

// console.log(appSyncClient, "appSyncClient");

// // Start the server and apply middleware
// async function startServer() {
//   await server.start();
//   server.applyMiddleware({ app });
// }

// // Call the startServer function
// startServer()
//   .then(() => {
//     // Start the server after applying middleware
//     app.listen(3000, () => {
//       console.log("Server is running on http://localhost:3000/graphql");
//     });
//   })
//   .catch((error) => {
//     console.error("Error starting the server:", error);
//   });

import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PubSub } from "graphql-subscriptions";

const app = express();
const pubsub = new PubSub();

const typeDefs = gql`
  type Message {
    id: ID!
    content: String!
  }

  type Query {
    messages: [Message]
  }

  type Subscription {
    newMessage: Message
  }
`;

const messages: any = [];
const resolvers = {
  Query: {
    messages: () => messages,
  },
  Subscription: {
    newMessage: {
      subscribe: () => pubsub.asyncIterator("NEW_MESSAGE"),
    },
  },
};

const dynamoDBClient = new DynamoDBClient({
  region: "eu-central-1",
  credentials: {
    accessKeyId: "AKIATJRIWQW4KCUN7EOA",
    secretAccessKey: "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",
  },
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { pubsub, dynamoDBClient },
});

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer().then(() => {
  const port = 4000;
  app.listen(port, () => {
    console.log(
      `Server running at http://localhost:${port}${server.graphqlPath}`
    );
  });
});
