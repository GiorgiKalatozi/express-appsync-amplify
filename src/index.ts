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

import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { AWSAppSyncClient } from "aws-appsync";

// Create an instance of the Express server
const app = express();

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }

  type Subscription {
    onMessageAdded: String
  }
`;

// Define the resolver functions
const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
  Subscription: {
    onMessageAdded: {
      subscribe: (_: any, __: any, { appSyncClient }: any) => {
        return appSyncClient.subscribe({
          query: gql`
            subscription {
              onMessageAdded {
                message
              }
            }
          `,
        });
      },
    },
  },
};

// Configure AWS AppSync client
const appSyncClient = new AWSAppSyncClient({
  url: "YOUR_APPSYNC_API_URL",
  region: "YOUR_AWS_REGION",
  auth: {
    type: "AWS_IAM",
    credentials: {
      accessKeyId: "YOUR_AWS_ACCESS_KEY",
      secretAccessKey: "YOUR_AWS_SECRET_ACCESS_KEY",
    },
  },
});

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ appSyncClient }),
});

// Apply Apollo Server middleware to the Express app
server.applyMiddleware({ app });

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/graphql");
});
