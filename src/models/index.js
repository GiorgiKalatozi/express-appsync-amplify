// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MessageActionEnum = {
  "DELIVER_MESSAGE": "DELIVER_MESSAGE",
  "SEEN_MESSAGE": "SEEN_MESSAGE",
  "TRANSFER_MESSAGE": "TRANSFER_MESSAGE"
};

const ChatsTypeEnum = {
  "SINGLE": "SINGLE",
  "GROUP": "GROUP"
};

const ChatsRoleEnum = {
  "OWNER": "OWNER",
  "ADMIN": "ADMIN",
  "USER": "USER"
};

const MessagesStatusEnum = {
  "SENT": "SENT",
  "DELIVERED": "DELIVERED",
  "SEEN": "SEEN"
};

const { MessageActions, SingleChats, Chats, SeenMessages, Messages, UnreadMessages, Workspaces, DeliveredMessages, Users, Address, PhoneNumber, Image, WorkspaceIndustry, WorkspaceWorkingHours, WorkspaceNumberOfEmployees, ChatLastMessage, Timezone } = initSchema(schema);

export {
  MessageActions,
  SingleChats,
  Chats,
  SeenMessages,
  Messages,
  UnreadMessages,
  Workspaces,
  DeliveredMessages,
  Users,
  MessageActionEnum,
  ChatsTypeEnum,
  ChatsRoleEnum,
  MessagesStatusEnum,
  Address,
  PhoneNumber,
  Image,
  WorkspaceIndustry,
  WorkspaceWorkingHours,
  WorkspaceNumberOfEmployees,
  ChatLastMessage,
  Timezone
};