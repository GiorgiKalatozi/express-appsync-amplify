// import { Amplify, API, graphqlOperation } from "aws-amplify";
// import { GraphQLSubscription } from "@aws-amplify/api";
// import { onCreateMessages } from "./graphql/subscriptions.js";
// import { OnCreateMessagesSubscription } from "./API.js";
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

// // let priorConnectionState: ConnectionState;

// // Hub.listen("api", (data: any) => {
// //   const { payload } = data;
// //   if (payload.event === CONNECTION_STATE_CHANGE) {
// //     if (
// //       priorConnectionState === ConnectionState.Connecting &&
// //       payload.data.connectionState === ConnectionState.Connected
// //     )
// //       priorConnectionState = payload.data.connectionState;
// //   }
// // });

// // Create an Express.js app
// const app = express();

// // Define a route to handle incoming messages
// // app.post("/messages", (req, res) => {
// //   // Handle the incoming message
// //   console.log("Received a new message:", req.body);

// //   // You can perform additional logic here, such as saving the message to a database

// //   res.sendStatus(200); // Send a response indicating successful processing
// // });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   // Subscribe to creation of Messages
//   API.graphql<GraphQLSubscription<OnCreateMessagesSubscription>>(
//     graphqlOperation(onCreateMessages)
//   ).subscribe({
//     next: (data) => console.log(data),
//     error: (error) => console.log(error),
//   });
//   // console.log(createSub, "createsub");

//   Hub.listen("api", (data: any) => {
//     console.log(data, "this is data");

//     const { payload } = data;
//     if (payload.event === CONNECTION_STATE_CHANGE) {
//       const connectionState = payload.data.connectionState as ConnectionState;
//       console.log(connectionState);
//       console.log(payload.message, "payload data");
//       // console.log(payload.message, "payload data");
//     }
//   });

//   console.log(`Server listening on port ${port}`);
// });
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { GraphQLSubscription, GraphQLQuery } from "@aws-amplify/api";
import { onCreateMessages } from "./graphql/subscriptions.js";
import { ListMessagesQuery, OnCreateMessagesSubscription } from "./API.js";
import express from "express";
import { CONNECTION_STATE_CHANGE, ConnectionState } from "@aws-amplify/pubsub";
import { Hub } from "aws-amplify";

console.log("hii");

Amplify.configure({
  aws_project_region: "eu-central-1",
  aws_appsync_graphqlEndpoint:
    "https://bs6z527jgvah3oy2cx3pdjmkvy.appsync-api.eu-central-1.amazonaws.com/graphql",
  aws_appsync_region: "eu-central-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-ocri2idwujafvhh4ehse42ou3u",
  aws_cognito_identity_pool_id:
    "eu-central-1:98172429-759e-43fa-bb21-23f8e8352f3e",
  aws_cognito_region: "eu-central-1",
  aws_user_pools_id: "eu-central-1_j9srAObkl",
  aws_user_pools_web_client_id: "1tb0j7fpn4ttbbd4r68qv3dh7u",
  oauth: {
    domain: "lavaping-development.auth.eu-central-1.amazoncognito.com",
  },
  aws_cognito_username_attributes: ["EMAIL"],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ["EMAIL"],
  aws_cognito_mfa_configuration: "OPTIONAL",
  aws_cognito_mfa_types: ["TOTP"],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [
      "REQUIRES_LOWERCASE",
      "REQUIRES_UPPERCASE",
      "REQUIRES_NUMBERS",
      "REQUIRES_SYMBOLS",
    ],
  },
  aws_cognito_verification_mechanisms: ["EMAIL"],
  aws_user_files_s3_bucket: "lavaping-web-storage-b0f884a6115332-staging",
  aws_user_files_s3_bucket_region: "eu-central-1",
});
const fetchRecentData = async () => {
  // Retrieve some/all data from AppSync
  const allTodos = await API.graphql<GraphQLQuery<ListMessagesQuery>>({
    query: "giorgi gigachadishvili",
  });

  console.log(allTodos);
};

// Create an Express.js app
const app = express();

// Define a route to handle incoming messages
app.post("/messages", (req, res) => {
  // Handle the incoming message
  console.log("Received a new message:", req.body);

  // You can perform additional logic here, such as saving the message to a database

  res.sendStatus(200); // Send a response indicating successful processing
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

let priorConnectionState: ConnectionState;

Hub.listen("api", (data: any) => {
  const { payload } = data;
  if (payload.event === CONNECTION_STATE_CHANGE) {
    if (
      priorConnectionState === ConnectionState.Connecting &&
      payload.data.connectionState === ConnectionState.Connected
    ) {
      fetchRecentData();
    }
    priorConnectionState = payload.data.connectionState;

    switch (payload.data.connectionState) {
      case ConnectionState.Connecting:
        console.log("Connection is being established...");
        break;
      case ConnectionState.Connected:
        console.log("Connection established!");
        break;
      case ConnectionState.Disconnecting:
        console.log("Connection is being disconnected...");
        break;
      case ConnectionState.Disconnected:
        console.log("Connection disconnected.");
        break;
      default:
        break;
    }
  }
});

// Subscribe to creation of Messages
const createSub = API.graphql<
  GraphQLSubscription<OnCreateMessagesSubscription>
>(graphqlOperation(onCreateMessages)).subscribe({
  next: (data) => console.log(data),
  error: (error) => console.log(error),
});

Hub.listen("api", (data: any) => {
  const { payload } = data;
  if (payload.event === CONNECTION_STATE_CHANGE) {
    const connectionState = payload.data.connectionState as ConnectionState;
    console.log("Connection state:", connectionState);
    console.log(payload.message, "payload data");
  }
});
