/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMessageActionsInput = {
  id?: string | null,
  action?: MessageActionEnum | null,
  user_id: string,
  message_id: string,
  message_owner: string,
  created_at: number,
  _version?: number | null,
};

export enum MessageActionEnum {
  DELIVER_MESSAGE = "DELIVER_MESSAGE",
  SEEN_MESSAGE = "SEEN_MESSAGE",
  TRANSFER_MESSAGE = "TRANSFER_MESSAGE",
}


export type ModelMessageActionsConditionInput = {
  action?: ModelMessageActionEnumInput | null,
  user_id?: ModelIDInput | null,
  message_id?: ModelIDInput | null,
  message_owner?: ModelIDInput | null,
  created_at?: ModelIntInput | null,
  and?: Array< ModelMessageActionsConditionInput | null > | null,
  or?: Array< ModelMessageActionsConditionInput | null > | null,
  not?: ModelMessageActionsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMessageActionEnumInput = {
  eq?: MessageActionEnum | null,
  ne?: MessageActionEnum | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type MessageActions = {
  __typename: "MessageActions",
  id: string,
  action?: MessageActionEnum | null,
  user_id: string,
  message_id: string,
  message_owner: string,
  created_at: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMessageActionsInput = {
  id: string,
  action?: MessageActionEnum | null,
  user_id?: string | null,
  message_id?: string | null,
  message_owner?: string | null,
  created_at?: number | null,
  _version?: number | null,
};

export type DeleteMessageActionsInput = {
  id: string,
  _version?: number | null,
};

export type CreateSingleChatsInput = {
  id?: string | null,
  user_id: string,
  chat_id: string,
  owner_id: string,
  workspace_id?: string | null,
  is_initial: boolean,
  title_initials?: string | null,
  color?: string | null,
  muted_until?: number | null,
  type: ChatsTypeEnum,
  last_messag?: ChatLastMessageInput | null,
  chat_members?: Array< string > | null,
  is_admin: boolean,
  is_active: boolean,
  created_at: number,
  _version?: number | null,
  singleChatsTitleId: string,
};

export enum ChatsTypeEnum {
  SINGLE = "SINGLE",
  GROUP = "GROUP",
}


export type ChatLastMessageInput = {
  content?: string | null,
  sender_id: string,
  created_at: number,
  status: MessagesStatusEnum,
  users_seen?: Array< string > | null,
};

export enum MessagesStatusEnum {
  SENT = "SENT",
  DELIVERED = "DELIVERED",
  SEEN = "SEEN",
}


export type ModelSingleChatsConditionInput = {
  user_id?: ModelIDInput | null,
  chat_id?: ModelIDInput | null,
  owner_id?: ModelIDInput | null,
  workspace_id?: ModelIDInput | null,
  is_initial?: ModelBooleanInput | null,
  title_initials?: ModelStringInput | null,
  color?: ModelStringInput | null,
  muted_until?: ModelIntInput | null,
  type?: ModelChatsTypeEnumInput | null,
  chat_members?: ModelIDInput | null,
  is_admin?: ModelBooleanInput | null,
  is_active?: ModelBooleanInput | null,
  created_at?: ModelIntInput | null,
  and?: Array< ModelSingleChatsConditionInput | null > | null,
  or?: Array< ModelSingleChatsConditionInput | null > | null,
  not?: ModelSingleChatsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  singleChatsTitleId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelChatsTypeEnumInput = {
  eq?: ChatsTypeEnum | null,
  ne?: ChatsTypeEnum | null,
};

export type SingleChats = {
  __typename: "SingleChats",
  id: string,
  user_id: string,
  chat_id: string,
  owner_id: string,
  workspace_id?: string | null,
  is_initial: boolean,
  title_initials?: string | null,
  color?: string | null,
  muted_until?: number | null,
  type: ChatsTypeEnum,
  last_messag?: ChatLastMessage | null,
  chat_members?: Array< string > | null,
  is_admin: boolean,
  is_active: boolean,
  created_at: number,
  title: Users,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  singleChatsTitleId: string,
};

export type ChatLastMessage = {
  __typename: "ChatLastMessage",
  content?: string | null,
  sender_id: string,
  created_at: number,
  status: MessagesStatusEnum,
  users_seen?: Array< string > | null,
};

export type Users = {
  __typename: "Users",
  id: string,
  email: string,
  first_name: string,
  last_name: string,
  full_name: string,
  avatar?: Image | null,
  color: string,
  initials: string,
  position?: string | null,
  birthday?: string | null,
  phone?: PhoneNumber | null,
  location?: Address | null,
  timezone?: Timezone | null,
  text_status?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Image = {
  __typename: "Image",
  small?: string | null,
  medium?: string | null,
  large?: string | null,
  x_large?: string | null,
};

export type PhoneNumber = {
  __typename: "PhoneNumber",
  phone_number?: string | null,
  prefix_id?: number | null,
  prefix?: string | null,
  prefix_country_initials?: string | null,
};

export type Address = {
  __typename: "Address",
  address?: string | null,
  city?: string | null,
  country_id?: number | null,
  country?: string | null,
  state?: string | null,
  zip_code?: string | null,
};

export type Timezone = {
  __typename: "Timezone",
  id?: number | null,
  name?: string | null,
};

export type UpdateSingleChatsInput = {
  id: string,
  user_id?: string | null,
  chat_id?: string | null,
  owner_id?: string | null,
  workspace_id?: string | null,
  is_initial?: boolean | null,
  title_initials?: string | null,
  color?: string | null,
  muted_until?: number | null,
  type?: ChatsTypeEnum | null,
  last_messag?: ChatLastMessageInput | null,
  chat_members?: Array< string > | null,
  is_admin?: boolean | null,
  is_active?: boolean | null,
  created_at?: number | null,
  _version?: number | null,
  singleChatsTitleId?: string | null,
};

export type DeleteSingleChatsInput = {
  id: string,
  _version?: number | null,
};

export type CreateChatsInput = {
  id?: string | null,
  user_id: string,
  chat_id: string,
  owner_id: string,
  workspace_id: string,
  is_initial: boolean,
  title?: string | null,
  title_initials?: string | null,
  color: string,
  muted_until?: number | null,
  type: ChatsTypeEnum,
  last_message?: ChatLastMessageInput | null,
  chat_members?: Array< string > | null,
  is_admin: boolean,
  is_active: boolean,
  created_at: number,
  _version?: number | null,
};

export type ModelChatsConditionInput = {
  user_id?: ModelIDInput | null,
  chat_id?: ModelIDInput | null,
  owner_id?: ModelIDInput | null,
  workspace_id?: ModelIDInput | null,
  is_initial?: ModelBooleanInput | null,
  title?: ModelStringInput | null,
  title_initials?: ModelStringInput | null,
  color?: ModelStringInput | null,
  muted_until?: ModelIntInput | null,
  type?: ModelChatsTypeEnumInput | null,
  chat_members?: ModelIDInput | null,
  is_admin?: ModelBooleanInput | null,
  is_active?: ModelBooleanInput | null,
  created_at?: ModelIntInput | null,
  and?: Array< ModelChatsConditionInput | null > | null,
  or?: Array< ModelChatsConditionInput | null > | null,
  not?: ModelChatsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Chats = {
  __typename: "Chats",
  id: string,
  user_id: string,
  chat_id: string,
  owner_id: string,
  workspace_id: string,
  is_initial: boolean,
  title?: string | null,
  title_initials?: string | null,
  color: string,
  muted_until?: number | null,
  type: ChatsTypeEnum,
  last_message?: ChatLastMessage | null,
  chat_members?: Array< string > | null,
  is_admin: boolean,
  is_active: boolean,
  created_at: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateChatsInput = {
  id: string,
  user_id?: string | null,
  chat_id?: string | null,
  owner_id?: string | null,
  workspace_id?: string | null,
  is_initial?: boolean | null,
  title?: string | null,
  title_initials?: string | null,
  color?: string | null,
  muted_until?: number | null,
  type?: ChatsTypeEnum | null,
  last_message?: ChatLastMessageInput | null,
  chat_members?: Array< string > | null,
  is_admin?: boolean | null,
  is_active?: boolean | null,
  created_at?: number | null,
  _version?: number | null,
};

export type DeleteChatsInput = {
  id: string,
  _version?: number | null,
};

export type CreateSeenMessagesInput = {
  id?: string | null,
  message_id: string,
  seener_id: string,
  owner_id: string,
  seen_at: number,
  _version?: number | null,
};

export type ModelSeenMessagesConditionInput = {
  message_id?: ModelIDInput | null,
  seener_id?: ModelIDInput | null,
  owner_id?: ModelIDInput | null,
  seen_at?: ModelIntInput | null,
  and?: Array< ModelSeenMessagesConditionInput | null > | null,
  or?: Array< ModelSeenMessagesConditionInput | null > | null,
  not?: ModelSeenMessagesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type SeenMessages = {
  __typename: "SeenMessages",
  id: string,
  message_id: string,
  seener_id: string,
  owner_id: string,
  seen_at: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSeenMessagesInput = {
  id: string,
  message_id?: string | null,
  seener_id?: string | null,
  owner_id?: string | null,
  seen_at?: number | null,
  _version?: number | null,
};

export type DeleteSeenMessagesInput = {
  id: string,
  _version?: number | null,
};

export type CreateMessagesInput = {
  id?: string | null,
  message_id: string,
  chat_id: string,
  user_id: string,
  workspace_id: string,
  is_initial: boolean,
  initiator_id: string,
  content?: string | null,
  status?: MessagesStatusEnum | null,
  hidden?: boolean | null,
  forwarded_from?: string | null,
  attachment?: string | null,
  replied_to?: string | null,
  created_at?: number | null,
  updated_at?: number | null,
  _version?: number | null,
};

export type ModelMessagesConditionInput = {
  message_id?: ModelIDInput | null,
  chat_id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  workspace_id?: ModelIDInput | null,
  is_initial?: ModelBooleanInput | null,
  initiator_id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  status?: ModelMessagesStatusEnumInput | null,
  hidden?: ModelBooleanInput | null,
  forwarded_from?: ModelIDInput | null,
  attachment?: ModelStringInput | null,
  replied_to?: ModelIDInput | null,
  created_at?: ModelIntInput | null,
  updated_at?: ModelIntInput | null,
  and?: Array< ModelMessagesConditionInput | null > | null,
  or?: Array< ModelMessagesConditionInput | null > | null,
  not?: ModelMessagesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMessagesStatusEnumInput = {
  eq?: MessagesStatusEnum | null,
  ne?: MessagesStatusEnum | null,
};

export type Messages = {
  __typename: "Messages",
  id: string,
  message_id: string,
  chat_id: string,
  user_id: string,
  workspace_id: string,
  is_initial: boolean,
  initiator_id: string,
  content?: string | null,
  status?: MessagesStatusEnum | null,
  hidden?: boolean | null,
  forwarded_from?: string | null,
  attachment?: string | null,
  replied_to?: string | null,
  created_at?: number | null,
  updated_at?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMessagesInput = {
  id: string,
  message_id?: string | null,
  chat_id?: string | null,
  user_id?: string | null,
  workspace_id?: string | null,
  is_initial?: boolean | null,
  initiator_id?: string | null,
  content?: string | null,
  status?: MessagesStatusEnum | null,
  hidden?: boolean | null,
  forwarded_from?: string | null,
  attachment?: string | null,
  replied_to?: string | null,
  created_at?: number | null,
  updated_at?: number | null,
  _version?: number | null,
};

export type DeleteMessagesInput = {
  id: string,
  _version?: number | null,
};

export type CreateUnreadMessagesInput = {
  id?: string | null,
  message_id: string,
  chat_id: string,
  user_id: string,
  workspace_id: string,
  is_initial: boolean,
  initiator_id: string,
  content?: string | null,
  status?: MessagesStatusEnum | null,
  hidden?: boolean | null,
  forwarded_from?: string | null,
  attachment?: string | null,
  replied_to?: string | null,
  created_at?: number | null,
  updated_at?: number | null,
  _version?: number | null,
};

export type ModelUnreadMessagesConditionInput = {
  message_id?: ModelIDInput | null,
  chat_id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  workspace_id?: ModelIDInput | null,
  is_initial?: ModelBooleanInput | null,
  initiator_id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  status?: ModelMessagesStatusEnumInput | null,
  hidden?: ModelBooleanInput | null,
  forwarded_from?: ModelIDInput | null,
  attachment?: ModelStringInput | null,
  replied_to?: ModelIDInput | null,
  created_at?: ModelIntInput | null,
  updated_at?: ModelIntInput | null,
  and?: Array< ModelUnreadMessagesConditionInput | null > | null,
  or?: Array< ModelUnreadMessagesConditionInput | null > | null,
  not?: ModelUnreadMessagesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UnreadMessages = {
  __typename: "UnreadMessages",
  id: string,
  message_id: string,
  chat_id: string,
  user_id: string,
  workspace_id: string,
  is_initial: boolean,
  initiator_id: string,
  content?: string | null,
  status?: MessagesStatusEnum | null,
  hidden?: boolean | null,
  forwarded_from?: string | null,
  attachment?: string | null,
  replied_to?: string | null,
  created_at?: number | null,
  updated_at?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUnreadMessagesInput = {
  id: string,
  message_id?: string | null,
  chat_id?: string | null,
  user_id?: string | null,
  workspace_id?: string | null,
  is_initial?: boolean | null,
  initiator_id?: string | null,
  content?: string | null,
  status?: MessagesStatusEnum | null,
  hidden?: boolean | null,
  forwarded_from?: string | null,
  attachment?: string | null,
  replied_to?: string | null,
  created_at?: number | null,
  updated_at?: number | null,
  _version?: number | null,
};

export type DeleteUnreadMessagesInput = {
  id: string,
  _version?: number | null,
};

export type CreateWorkspacesInput = {
  id?: string | null,
  name: string,
  slug: string,
  workspace_users?: Array< string > | null,
  address?: Array< AddressInput | null > | null,
  email?: Array< string | null > | null,
  working_hours?: Array< WorkspaceWorkingHoursInput | null > | null,
  phone?: Array< PhoneNumberInput | null > | null,
  image?: ImageInput | null,
  company_birthday?: string | null,
  description?: string | null,
  website_address?: string | null,
  industry?: WorkspaceIndustryInput | null,
  number_of_employees?: WorkspaceNumberOfEmployeesInput | null,
  _version?: number | null,
};

export type AddressInput = {
  address?: string | null,
  city?: string | null,
  country_id?: number | null,
  country?: string | null,
  state?: string | null,
  zip_code?: string | null,
};

export type WorkspaceWorkingHoursInput = {
  from?: string | null,
  to?: string | null,
  time_format?: number | null,
  timezone?: TimezoneInput | null,
};

export type TimezoneInput = {
  id?: number | null,
  name?: string | null,
};

export type PhoneNumberInput = {
  phone_number?: string | null,
  prefix_id?: number | null,
  prefix?: string | null,
  prefix_country_initials?: string | null,
};

export type ImageInput = {
  small?: string | null,
  medium?: string | null,
  large?: string | null,
  x_large?: string | null,
};

export type WorkspaceIndustryInput = {
  id?: number | null,
  name?: string | null,
};

export type WorkspaceNumberOfEmployeesInput = {
  id?: number | null,
  quantity?: string | null,
};

export type ModelWorkspacesConditionInput = {
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  workspace_users?: ModelIDInput | null,
  email?: ModelStringInput | null,
  company_birthday?: ModelStringInput | null,
  description?: ModelStringInput | null,
  website_address?: ModelStringInput | null,
  and?: Array< ModelWorkspacesConditionInput | null > | null,
  or?: Array< ModelWorkspacesConditionInput | null > | null,
  not?: ModelWorkspacesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Workspaces = {
  __typename: "Workspaces",
  id: string,
  name: string,
  slug: string,
  workspace_users?: Array< string > | null,
  address?:  Array<Address | null > | null,
  email?: Array< string | null > | null,
  working_hours?:  Array<WorkspaceWorkingHours | null > | null,
  phone?:  Array<PhoneNumber | null > | null,
  image?: Image | null,
  company_birthday?: string | null,
  description?: string | null,
  website_address?: string | null,
  industry?: WorkspaceIndustry | null,
  number_of_employees?: WorkspaceNumberOfEmployees | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type WorkspaceWorkingHours = {
  __typename: "WorkspaceWorkingHours",
  from?: string | null,
  to?: string | null,
  time_format?: number | null,
  timezone?: Timezone | null,
};

export type WorkspaceIndustry = {
  __typename: "WorkspaceIndustry",
  id?: number | null,
  name?: string | null,
};

export type WorkspaceNumberOfEmployees = {
  __typename: "WorkspaceNumberOfEmployees",
  id?: number | null,
  quantity?: string | null,
};

export type UpdateWorkspacesInput = {
  id: string,
  name?: string | null,
  slug?: string | null,
  workspace_users?: Array< string > | null,
  address?: Array< AddressInput | null > | null,
  email?: Array< string | null > | null,
  working_hours?: Array< WorkspaceWorkingHoursInput | null > | null,
  phone?: Array< PhoneNumberInput | null > | null,
  image?: ImageInput | null,
  company_birthday?: string | null,
  description?: string | null,
  website_address?: string | null,
  industry?: WorkspaceIndustryInput | null,
  number_of_employees?: WorkspaceNumberOfEmployeesInput | null,
  _version?: number | null,
};

export type DeleteWorkspacesInput = {
  id: string,
  _version?: number | null,
};

export type CreateDeliveredMessagesInput = {
  id?: string | null,
  message_id: string,
  deliverer_id: string,
  owner_id: string,
  delivered_at: number,
  _version?: number | null,
};

export type ModelDeliveredMessagesConditionInput = {
  message_id?: ModelIDInput | null,
  deliverer_id?: ModelIDInput | null,
  owner_id?: ModelIDInput | null,
  delivered_at?: ModelIntInput | null,
  and?: Array< ModelDeliveredMessagesConditionInput | null > | null,
  or?: Array< ModelDeliveredMessagesConditionInput | null > | null,
  not?: ModelDeliveredMessagesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type DeliveredMessages = {
  __typename: "DeliveredMessages",
  id: string,
  message_id: string,
  deliverer_id: string,
  owner_id: string,
  delivered_at: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateDeliveredMessagesInput = {
  id: string,
  message_id?: string | null,
  deliverer_id?: string | null,
  owner_id?: string | null,
  delivered_at?: number | null,
  _version?: number | null,
};

export type DeleteDeliveredMessagesInput = {
  id: string,
  _version?: number | null,
};

export type CreateUsersInput = {
  id?: string | null,
  email: string,
  first_name: string,
  last_name: string,
  full_name: string,
  avatar?: ImageInput | null,
  color: string,
  initials: string,
  position?: string | null,
  birthday?: string | null,
  phone?: PhoneNumberInput | null,
  location?: AddressInput | null,
  timezone?: TimezoneInput | null,
  text_status?: string | null,
  _version?: number | null,
};

export type ModelUsersConditionInput = {
  email?: ModelStringInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  full_name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  initials?: ModelStringInput | null,
  position?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  text_status?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateUsersInput = {
  id: string,
  email?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  full_name?: string | null,
  avatar?: ImageInput | null,
  color?: string | null,
  initials?: string | null,
  position?: string | null,
  birthday?: string | null,
  phone?: PhoneNumberInput | null,
  location?: AddressInput | null,
  timezone?: TimezoneInput | null,
  text_status?: string | null,
  _version?: number | null,
};

export type DeleteUsersInput = {
  id: string,
  _version?: number | null,
};

export type ModelMessageActionsFilterInput = {
  id?: ModelIDInput | null,
  action?: ModelMessageActionEnumInput | null,
  user_id?: ModelIDInput | null,
  message_id?: ModelIDInput | null,
  message_owner?: ModelIDInput | null,
  created_at?: ModelIntInput | null,
  and?: Array< ModelMessageActionsFilterInput | null > | null,
  or?: Array< ModelMessageActionsFilterInput | null > | null,
  not?: ModelMessageActionsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMessageActionsConnection = {
  __typename: "ModelMessageActionsConnection",
  items:  Array<MessageActions | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSingleChatsFilterInput = {
  id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  chat_id?: ModelIDInput | null,
  owner_id?: ModelIDInput | null,
  workspace_id?: ModelIDInput | null,
  is_initial?: ModelBooleanInput | null,
  title_initials?: ModelStringInput | null,
  color?: ModelStringInput | null,
  muted_until?: ModelIntInput | null,
  type?: ModelChatsTypeEnumInput | null,
  chat_members?: ModelIDInput | null,
  is_admin?: ModelBooleanInput | null,
  is_active?: ModelBooleanInput | null,
  created_at?: ModelIntInput | null,
  and?: Array< ModelSingleChatsFilterInput | null > | null,
  or?: Array< ModelSingleChatsFilterInput | null > | null,
  not?: ModelSingleChatsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  singleChatsTitleId?: ModelIDInput | null,
};

export type ModelSingleChatsConnection = {
  __typename: "ModelSingleChatsConnection",
  items:  Array<SingleChats | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelChatsFilterInput = {
  id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  chat_id?: ModelIDInput | null,
  owner_id?: ModelIDInput | null,
  workspace_id?: ModelIDInput | null,
  is_initial?: ModelBooleanInput | null,
  title?: ModelStringInput | null,
  title_initials?: ModelStringInput | null,
  color?: ModelStringInput | null,
  muted_until?: ModelIntInput | null,
  type?: ModelChatsTypeEnumInput | null,
  chat_members?: ModelIDInput | null,
  is_admin?: ModelBooleanInput | null,
  is_active?: ModelBooleanInput | null,
  created_at?: ModelIntInput | null,
  and?: Array< ModelChatsFilterInput | null > | null,
  or?: Array< ModelChatsFilterInput | null > | null,
  not?: ModelChatsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelChatsConnection = {
  __typename: "ModelChatsConnection",
  items:  Array<Chats | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSeenMessagesFilterInput = {
  id?: ModelIDInput | null,
  message_id?: ModelIDInput | null,
  seener_id?: ModelIDInput | null,
  owner_id?: ModelIDInput | null,
  seen_at?: ModelIntInput | null,
  and?: Array< ModelSeenMessagesFilterInput | null > | null,
  or?: Array< ModelSeenMessagesFilterInput | null > | null,
  not?: ModelSeenMessagesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSeenMessagesConnection = {
  __typename: "ModelSeenMessagesConnection",
  items:  Array<SeenMessages | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMessagesFilterInput = {
  id?: ModelIDInput | null,
  message_id?: ModelIDInput | null,
  chat_id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  workspace_id?: ModelIDInput | null,
  is_initial?: ModelBooleanInput | null,
  initiator_id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  status?: ModelMessagesStatusEnumInput | null,
  hidden?: ModelBooleanInput | null,
  forwarded_from?: ModelIDInput | null,
  attachment?: ModelStringInput | null,
  replied_to?: ModelIDInput | null,
  created_at?: ModelIntInput | null,
  updated_at?: ModelIntInput | null,
  and?: Array< ModelMessagesFilterInput | null > | null,
  or?: Array< ModelMessagesFilterInput | null > | null,
  not?: ModelMessagesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelMessagesConnection = {
  __typename: "ModelMessagesConnection",
  items:  Array<Messages | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUnreadMessagesFilterInput = {
  id?: ModelIDInput | null,
  message_id?: ModelIDInput | null,
  chat_id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  workspace_id?: ModelIDInput | null,
  is_initial?: ModelBooleanInput | null,
  initiator_id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  status?: ModelMessagesStatusEnumInput | null,
  hidden?: ModelBooleanInput | null,
  forwarded_from?: ModelIDInput | null,
  attachment?: ModelStringInput | null,
  replied_to?: ModelIDInput | null,
  created_at?: ModelIntInput | null,
  updated_at?: ModelIntInput | null,
  and?: Array< ModelUnreadMessagesFilterInput | null > | null,
  or?: Array< ModelUnreadMessagesFilterInput | null > | null,
  not?: ModelUnreadMessagesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUnreadMessagesConnection = {
  __typename: "ModelUnreadMessagesConnection",
  items:  Array<UnreadMessages | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWorkspacesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  workspace_users?: ModelIDInput | null,
  email?: ModelStringInput | null,
  company_birthday?: ModelStringInput | null,
  description?: ModelStringInput | null,
  website_address?: ModelStringInput | null,
  and?: Array< ModelWorkspacesFilterInput | null > | null,
  or?: Array< ModelWorkspacesFilterInput | null > | null,
  not?: ModelWorkspacesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelWorkspacesConnection = {
  __typename: "ModelWorkspacesConnection",
  items:  Array<Workspaces | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelDeliveredMessagesFilterInput = {
  id?: ModelIDInput | null,
  message_id?: ModelIDInput | null,
  deliverer_id?: ModelIDInput | null,
  owner_id?: ModelIDInput | null,
  delivered_at?: ModelIntInput | null,
  and?: Array< ModelDeliveredMessagesFilterInput | null > | null,
  or?: Array< ModelDeliveredMessagesFilterInput | null > | null,
  not?: ModelDeliveredMessagesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelDeliveredMessagesConnection = {
  __typename: "ModelDeliveredMessagesConnection",
  items:  Array<DeliveredMessages | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  full_name?: ModelStringInput | null,
  color?: ModelStringInput | null,
  initials?: ModelStringInput | null,
  position?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  text_status?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionMessageActionsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  action?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  message_id?: ModelSubscriptionIDInput | null,
  message_owner?: ModelSubscriptionIDInput | null,
  created_at?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionMessageActionsFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageActionsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionSingleChatsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  chat_id?: ModelSubscriptionIDInput | null,
  owner_id?: ModelSubscriptionIDInput | null,
  workspace_id?: ModelSubscriptionIDInput | null,
  is_initial?: ModelSubscriptionBooleanInput | null,
  title_initials?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  muted_until?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  chat_members?: ModelSubscriptionIDInput | null,
  is_admin?: ModelSubscriptionBooleanInput | null,
  is_active?: ModelSubscriptionBooleanInput | null,
  created_at?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionSingleChatsFilterInput | null > | null,
  or?: Array< ModelSubscriptionSingleChatsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionChatsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  chat_id?: ModelSubscriptionIDInput | null,
  owner_id?: ModelSubscriptionIDInput | null,
  workspace_id?: ModelSubscriptionIDInput | null,
  is_initial?: ModelSubscriptionBooleanInput | null,
  title?: ModelSubscriptionStringInput | null,
  title_initials?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  muted_until?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  chat_members?: ModelSubscriptionIDInput | null,
  is_admin?: ModelSubscriptionBooleanInput | null,
  is_active?: ModelSubscriptionBooleanInput | null,
  created_at?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionChatsFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionSeenMessagesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message_id?: ModelSubscriptionIDInput | null,
  seener_id?: ModelSubscriptionIDInput | null,
  owner_id?: ModelSubscriptionIDInput | null,
  seen_at?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionSeenMessagesFilterInput | null > | null,
  or?: Array< ModelSubscriptionSeenMessagesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionMessagesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message_id?: ModelSubscriptionIDInput | null,
  chat_id?: ModelSubscriptionIDInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  workspace_id?: ModelSubscriptionIDInput | null,
  is_initial?: ModelSubscriptionBooleanInput | null,
  initiator_id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  hidden?: ModelSubscriptionBooleanInput | null,
  forwarded_from?: ModelSubscriptionIDInput | null,
  attachment?: ModelSubscriptionStringInput | null,
  replied_to?: ModelSubscriptionIDInput | null,
  created_at?: ModelSubscriptionIntInput | null,
  updated_at?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionMessagesFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessagesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUnreadMessagesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message_id?: ModelSubscriptionIDInput | null,
  chat_id?: ModelSubscriptionIDInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  workspace_id?: ModelSubscriptionIDInput | null,
  is_initial?: ModelSubscriptionBooleanInput | null,
  initiator_id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  hidden?: ModelSubscriptionBooleanInput | null,
  forwarded_from?: ModelSubscriptionIDInput | null,
  attachment?: ModelSubscriptionStringInput | null,
  replied_to?: ModelSubscriptionIDInput | null,
  created_at?: ModelSubscriptionIntInput | null,
  updated_at?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionUnreadMessagesFilterInput | null > | null,
  or?: Array< ModelSubscriptionUnreadMessagesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionWorkspacesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  workspace_users?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  company_birthday?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  website_address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkspacesFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkspacesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionDeliveredMessagesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message_id?: ModelSubscriptionIDInput | null,
  deliverer_id?: ModelSubscriptionIDInput | null,
  owner_id?: ModelSubscriptionIDInput | null,
  delivered_at?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionDeliveredMessagesFilterInput | null > | null,
  or?: Array< ModelSubscriptionDeliveredMessagesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUsersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  full_name?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  initials?: ModelSubscriptionStringInput | null,
  position?: ModelSubscriptionStringInput | null,
  birthday?: ModelSubscriptionStringInput | null,
  text_status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUsersFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateMessageActionsMutationVariables = {
  input: CreateMessageActionsInput,
  condition?: ModelMessageActionsConditionInput | null,
};

export type CreateMessageActionsMutation = {
  createMessageActions?:  {
    __typename: "MessageActions",
    id: string,
    action?: MessageActionEnum | null,
    user_id: string,
    message_id: string,
    message_owner: string,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMessageActionsMutationVariables = {
  input: UpdateMessageActionsInput,
  condition?: ModelMessageActionsConditionInput | null,
};

export type UpdateMessageActionsMutation = {
  updateMessageActions?:  {
    __typename: "MessageActions",
    id: string,
    action?: MessageActionEnum | null,
    user_id: string,
    message_id: string,
    message_owner: string,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessageActionsMutationVariables = {
  input: DeleteMessageActionsInput,
  condition?: ModelMessageActionsConditionInput | null,
};

export type DeleteMessageActionsMutation = {
  deleteMessageActions?:  {
    __typename: "MessageActions",
    id: string,
    action?: MessageActionEnum | null,
    user_id: string,
    message_id: string,
    message_owner: string,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSingleChatsMutationVariables = {
  input: CreateSingleChatsInput,
  condition?: ModelSingleChatsConditionInput | null,
};

export type CreateSingleChatsMutation = {
  createSingleChats?:  {
    __typename: "SingleChats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id?: string | null,
    is_initial: boolean,
    title_initials?: string | null,
    color?: string | null,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_messag?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    title:  {
      __typename: "Users",
      id: string,
      email: string,
      first_name: string,
      last_name: string,
      full_name: string,
      color: string,
      initials: string,
      position?: string | null,
      birthday?: string | null,
      text_status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    singleChatsTitleId: string,
  } | null,
};

export type UpdateSingleChatsMutationVariables = {
  input: UpdateSingleChatsInput,
  condition?: ModelSingleChatsConditionInput | null,
};

export type UpdateSingleChatsMutation = {
  updateSingleChats?:  {
    __typename: "SingleChats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id?: string | null,
    is_initial: boolean,
    title_initials?: string | null,
    color?: string | null,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_messag?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    title:  {
      __typename: "Users",
      id: string,
      email: string,
      first_name: string,
      last_name: string,
      full_name: string,
      color: string,
      initials: string,
      position?: string | null,
      birthday?: string | null,
      text_status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    singleChatsTitleId: string,
  } | null,
};

export type DeleteSingleChatsMutationVariables = {
  input: DeleteSingleChatsInput,
  condition?: ModelSingleChatsConditionInput | null,
};

export type DeleteSingleChatsMutation = {
  deleteSingleChats?:  {
    __typename: "SingleChats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id?: string | null,
    is_initial: boolean,
    title_initials?: string | null,
    color?: string | null,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_messag?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    title:  {
      __typename: "Users",
      id: string,
      email: string,
      first_name: string,
      last_name: string,
      full_name: string,
      color: string,
      initials: string,
      position?: string | null,
      birthday?: string | null,
      text_status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    singleChatsTitleId: string,
  } | null,
};

export type CreateChatsMutationVariables = {
  input: CreateChatsInput,
  condition?: ModelChatsConditionInput | null,
};

export type CreateChatsMutation = {
  createChats?:  {
    __typename: "Chats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id: string,
    is_initial: boolean,
    title?: string | null,
    title_initials?: string | null,
    color: string,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_message?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateChatsMutationVariables = {
  input: UpdateChatsInput,
  condition?: ModelChatsConditionInput | null,
};

export type UpdateChatsMutation = {
  updateChats?:  {
    __typename: "Chats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id: string,
    is_initial: boolean,
    title?: string | null,
    title_initials?: string | null,
    color: string,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_message?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteChatsMutationVariables = {
  input: DeleteChatsInput,
  condition?: ModelChatsConditionInput | null,
};

export type DeleteChatsMutation = {
  deleteChats?:  {
    __typename: "Chats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id: string,
    is_initial: boolean,
    title?: string | null,
    title_initials?: string | null,
    color: string,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_message?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateSeenMessagesMutationVariables = {
  input: CreateSeenMessagesInput,
  condition?: ModelSeenMessagesConditionInput | null,
};

export type CreateSeenMessagesMutation = {
  createSeenMessages?:  {
    __typename: "SeenMessages",
    id: string,
    message_id: string,
    seener_id: string,
    owner_id: string,
    seen_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSeenMessagesMutationVariables = {
  input: UpdateSeenMessagesInput,
  condition?: ModelSeenMessagesConditionInput | null,
};

export type UpdateSeenMessagesMutation = {
  updateSeenMessages?:  {
    __typename: "SeenMessages",
    id: string,
    message_id: string,
    seener_id: string,
    owner_id: string,
    seen_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSeenMessagesMutationVariables = {
  input: DeleteSeenMessagesInput,
  condition?: ModelSeenMessagesConditionInput | null,
};

export type DeleteSeenMessagesMutation = {
  deleteSeenMessages?:  {
    __typename: "SeenMessages",
    id: string,
    message_id: string,
    seener_id: string,
    owner_id: string,
    seen_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMessagesMutationVariables = {
  input: CreateMessagesInput,
  condition?: ModelMessagesConditionInput | null,
};

export type CreateMessagesMutation = {
  createMessages?:  {
    __typename: "Messages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMessagesMutationVariables = {
  input: UpdateMessagesInput,
  condition?: ModelMessagesConditionInput | null,
};

export type UpdateMessagesMutation = {
  updateMessages?:  {
    __typename: "Messages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessagesMutationVariables = {
  input: DeleteMessagesInput,
  condition?: ModelMessagesConditionInput | null,
};

export type DeleteMessagesMutation = {
  deleteMessages?:  {
    __typename: "Messages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUnreadMessagesMutationVariables = {
  input: CreateUnreadMessagesInput,
  condition?: ModelUnreadMessagesConditionInput | null,
};

export type CreateUnreadMessagesMutation = {
  createUnreadMessages?:  {
    __typename: "UnreadMessages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUnreadMessagesMutationVariables = {
  input: UpdateUnreadMessagesInput,
  condition?: ModelUnreadMessagesConditionInput | null,
};

export type UpdateUnreadMessagesMutation = {
  updateUnreadMessages?:  {
    __typename: "UnreadMessages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUnreadMessagesMutationVariables = {
  input: DeleteUnreadMessagesInput,
  condition?: ModelUnreadMessagesConditionInput | null,
};

export type DeleteUnreadMessagesMutation = {
  deleteUnreadMessages?:  {
    __typename: "UnreadMessages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateWorkspacesMutationVariables = {
  input: CreateWorkspacesInput,
  condition?: ModelWorkspacesConditionInput | null,
};

export type CreateWorkspacesMutation = {
  createWorkspaces?:  {
    __typename: "Workspaces",
    id: string,
    name: string,
    slug: string,
    workspace_users?: Array< string > | null,
    address?:  Array< {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null > | null,
    email?: Array< string | null > | null,
    working_hours?:  Array< {
      __typename: "WorkspaceWorkingHours",
      from?: string | null,
      to?: string | null,
      time_format?: number | null,
    } | null > | null,
    phone?:  Array< {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null > | null,
    image?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    company_birthday?: string | null,
    description?: string | null,
    website_address?: string | null,
    industry?:  {
      __typename: "WorkspaceIndustry",
      id?: number | null,
      name?: string | null,
    } | null,
    number_of_employees?:  {
      __typename: "WorkspaceNumberOfEmployees",
      id?: number | null,
      quantity?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateWorkspacesMutationVariables = {
  input: UpdateWorkspacesInput,
  condition?: ModelWorkspacesConditionInput | null,
};

export type UpdateWorkspacesMutation = {
  updateWorkspaces?:  {
    __typename: "Workspaces",
    id: string,
    name: string,
    slug: string,
    workspace_users?: Array< string > | null,
    address?:  Array< {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null > | null,
    email?: Array< string | null > | null,
    working_hours?:  Array< {
      __typename: "WorkspaceWorkingHours",
      from?: string | null,
      to?: string | null,
      time_format?: number | null,
    } | null > | null,
    phone?:  Array< {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null > | null,
    image?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    company_birthday?: string | null,
    description?: string | null,
    website_address?: string | null,
    industry?:  {
      __typename: "WorkspaceIndustry",
      id?: number | null,
      name?: string | null,
    } | null,
    number_of_employees?:  {
      __typename: "WorkspaceNumberOfEmployees",
      id?: number | null,
      quantity?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteWorkspacesMutationVariables = {
  input: DeleteWorkspacesInput,
  condition?: ModelWorkspacesConditionInput | null,
};

export type DeleteWorkspacesMutation = {
  deleteWorkspaces?:  {
    __typename: "Workspaces",
    id: string,
    name: string,
    slug: string,
    workspace_users?: Array< string > | null,
    address?:  Array< {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null > | null,
    email?: Array< string | null > | null,
    working_hours?:  Array< {
      __typename: "WorkspaceWorkingHours",
      from?: string | null,
      to?: string | null,
      time_format?: number | null,
    } | null > | null,
    phone?:  Array< {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null > | null,
    image?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    company_birthday?: string | null,
    description?: string | null,
    website_address?: string | null,
    industry?:  {
      __typename: "WorkspaceIndustry",
      id?: number | null,
      name?: string | null,
    } | null,
    number_of_employees?:  {
      __typename: "WorkspaceNumberOfEmployees",
      id?: number | null,
      quantity?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDeliveredMessagesMutationVariables = {
  input: CreateDeliveredMessagesInput,
  condition?: ModelDeliveredMessagesConditionInput | null,
};

export type CreateDeliveredMessagesMutation = {
  createDeliveredMessages?:  {
    __typename: "DeliveredMessages",
    id: string,
    message_id: string,
    deliverer_id: string,
    owner_id: string,
    delivered_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDeliveredMessagesMutationVariables = {
  input: UpdateDeliveredMessagesInput,
  condition?: ModelDeliveredMessagesConditionInput | null,
};

export type UpdateDeliveredMessagesMutation = {
  updateDeliveredMessages?:  {
    __typename: "DeliveredMessages",
    id: string,
    message_id: string,
    deliverer_id: string,
    owner_id: string,
    delivered_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDeliveredMessagesMutationVariables = {
  input: DeleteDeliveredMessagesInput,
  condition?: ModelDeliveredMessagesConditionInput | null,
};

export type DeleteDeliveredMessagesMutation = {
  deleteDeliveredMessages?:  {
    __typename: "DeliveredMessages",
    id: string,
    message_id: string,
    deliverer_id: string,
    owner_id: string,
    delivered_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    full_name: string,
    avatar?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    color: string,
    initials: string,
    position?: string | null,
    birthday?: string | null,
    phone?:  {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null,
    location?:  {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null,
    timezone?:  {
      __typename: "Timezone",
      id?: number | null,
      name?: string | null,
    } | null,
    text_status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    full_name: string,
    avatar?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    color: string,
    initials: string,
    position?: string | null,
    birthday?: string | null,
    phone?:  {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null,
    location?:  {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null,
    timezone?:  {
      __typename: "Timezone",
      id?: number | null,
      name?: string | null,
    } | null,
    text_status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    full_name: string,
    avatar?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    color: string,
    initials: string,
    position?: string | null,
    birthday?: string | null,
    phone?:  {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null,
    location?:  {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null,
    timezone?:  {
      __typename: "Timezone",
      id?: number | null,
      name?: string | null,
    } | null,
    text_status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetMessageActionsQueryVariables = {
  id: string,
};

export type GetMessageActionsQuery = {
  getMessageActions?:  {
    __typename: "MessageActions",
    id: string,
    action?: MessageActionEnum | null,
    user_id: string,
    message_id: string,
    message_owner: string,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessageActionsQueryVariables = {
  filter?: ModelMessageActionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessageActionsQuery = {
  listMessageActions?:  {
    __typename: "ModelMessageActionsConnection",
    items:  Array< {
      __typename: "MessageActions",
      id: string,
      action?: MessageActionEnum | null,
      user_id: string,
      message_id: string,
      message_owner: string,
      created_at: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessageActionsQueryVariables = {
  filter?: ModelMessageActionsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessageActionsQuery = {
  syncMessageActions?:  {
    __typename: "ModelMessageActionsConnection",
    items:  Array< {
      __typename: "MessageActions",
      id: string,
      action?: MessageActionEnum | null,
      user_id: string,
      message_id: string,
      message_owner: string,
      created_at: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSingleChatsQueryVariables = {
  id: string,
};

export type GetSingleChatsQuery = {
  getSingleChats?:  {
    __typename: "SingleChats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id?: string | null,
    is_initial: boolean,
    title_initials?: string | null,
    color?: string | null,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_messag?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    title:  {
      __typename: "Users",
      id: string,
      email: string,
      first_name: string,
      last_name: string,
      full_name: string,
      color: string,
      initials: string,
      position?: string | null,
      birthday?: string | null,
      text_status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    singleChatsTitleId: string,
  } | null,
};

export type ListSingleChatsQueryVariables = {
  filter?: ModelSingleChatsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSingleChatsQuery = {
  listSingleChats?:  {
    __typename: "ModelSingleChatsConnection",
    items:  Array< {
      __typename: "SingleChats",
      id: string,
      user_id: string,
      chat_id: string,
      owner_id: string,
      workspace_id?: string | null,
      is_initial: boolean,
      title_initials?: string | null,
      color?: string | null,
      muted_until?: number | null,
      type: ChatsTypeEnum,
      chat_members?: Array< string > | null,
      is_admin: boolean,
      is_active: boolean,
      created_at: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      singleChatsTitleId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSingleChatsQueryVariables = {
  filter?: ModelSingleChatsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSingleChatsQuery = {
  syncSingleChats?:  {
    __typename: "ModelSingleChatsConnection",
    items:  Array< {
      __typename: "SingleChats",
      id: string,
      user_id: string,
      chat_id: string,
      owner_id: string,
      workspace_id?: string | null,
      is_initial: boolean,
      title_initials?: string | null,
      color?: string | null,
      muted_until?: number | null,
      type: ChatsTypeEnum,
      chat_members?: Array< string > | null,
      is_admin: boolean,
      is_active: boolean,
      created_at: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      singleChatsTitleId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetChatsQueryVariables = {
  id: string,
};

export type GetChatsQuery = {
  getChats?:  {
    __typename: "Chats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id: string,
    is_initial: boolean,
    title?: string | null,
    title_initials?: string | null,
    color: string,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_message?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListChatsQueryVariables = {
  filter?: ModelChatsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatsQuery = {
  listChats?:  {
    __typename: "ModelChatsConnection",
    items:  Array< {
      __typename: "Chats",
      id: string,
      user_id: string,
      chat_id: string,
      owner_id: string,
      workspace_id: string,
      is_initial: boolean,
      title?: string | null,
      title_initials?: string | null,
      color: string,
      muted_until?: number | null,
      type: ChatsTypeEnum,
      chat_members?: Array< string > | null,
      is_admin: boolean,
      is_active: boolean,
      created_at: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChatsQueryVariables = {
  filter?: ModelChatsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChatsQuery = {
  syncChats?:  {
    __typename: "ModelChatsConnection",
    items:  Array< {
      __typename: "Chats",
      id: string,
      user_id: string,
      chat_id: string,
      owner_id: string,
      workspace_id: string,
      is_initial: boolean,
      title?: string | null,
      title_initials?: string | null,
      color: string,
      muted_until?: number | null,
      type: ChatsTypeEnum,
      chat_members?: Array< string > | null,
      is_admin: boolean,
      is_active: boolean,
      created_at: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSeenMessagesQueryVariables = {
  id: string,
};

export type GetSeenMessagesQuery = {
  getSeenMessages?:  {
    __typename: "SeenMessages",
    id: string,
    message_id: string,
    seener_id: string,
    owner_id: string,
    seen_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSeenMessagesQueryVariables = {
  filter?: ModelSeenMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSeenMessagesQuery = {
  listSeenMessages?:  {
    __typename: "ModelSeenMessagesConnection",
    items:  Array< {
      __typename: "SeenMessages",
      id: string,
      message_id: string,
      seener_id: string,
      owner_id: string,
      seen_at: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSeenMessagesQueryVariables = {
  filter?: ModelSeenMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSeenMessagesQuery = {
  syncSeenMessages?:  {
    __typename: "ModelSeenMessagesConnection",
    items:  Array< {
      __typename: "SeenMessages",
      id: string,
      message_id: string,
      seener_id: string,
      owner_id: string,
      seen_at: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMessagesQueryVariables = {
  id: string,
};

export type GetMessagesQuery = {
  getMessages?:  {
    __typename: "Messages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessagesConnection",
    items:  Array< {
      __typename: "Messages",
      id: string,
      message_id: string,
      chat_id: string,
      user_id: string,
      workspace_id: string,
      is_initial: boolean,
      initiator_id: string,
      content?: string | null,
      status?: MessagesStatusEnum | null,
      hidden?: boolean | null,
      forwarded_from?: string | null,
      attachment?: string | null,
      replied_to?: string | null,
      created_at?: number | null,
      updated_at?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessagesQueryVariables = {
  filter?: ModelMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessagesQuery = {
  syncMessages?:  {
    __typename: "ModelMessagesConnection",
    items:  Array< {
      __typename: "Messages",
      id: string,
      message_id: string,
      chat_id: string,
      user_id: string,
      workspace_id: string,
      is_initial: boolean,
      initiator_id: string,
      content?: string | null,
      status?: MessagesStatusEnum | null,
      hidden?: boolean | null,
      forwarded_from?: string | null,
      attachment?: string | null,
      replied_to?: string | null,
      created_at?: number | null,
      updated_at?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUnreadMessagesQueryVariables = {
  id: string,
};

export type GetUnreadMessagesQuery = {
  getUnreadMessages?:  {
    __typename: "UnreadMessages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUnreadMessagesQueryVariables = {
  filter?: ModelUnreadMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUnreadMessagesQuery = {
  listUnreadMessages?:  {
    __typename: "ModelUnreadMessagesConnection",
    items:  Array< {
      __typename: "UnreadMessages",
      id: string,
      message_id: string,
      chat_id: string,
      user_id: string,
      workspace_id: string,
      is_initial: boolean,
      initiator_id: string,
      content?: string | null,
      status?: MessagesStatusEnum | null,
      hidden?: boolean | null,
      forwarded_from?: string | null,
      attachment?: string | null,
      replied_to?: string | null,
      created_at?: number | null,
      updated_at?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUnreadMessagesQueryVariables = {
  filter?: ModelUnreadMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUnreadMessagesQuery = {
  syncUnreadMessages?:  {
    __typename: "ModelUnreadMessagesConnection",
    items:  Array< {
      __typename: "UnreadMessages",
      id: string,
      message_id: string,
      chat_id: string,
      user_id: string,
      workspace_id: string,
      is_initial: boolean,
      initiator_id: string,
      content?: string | null,
      status?: MessagesStatusEnum | null,
      hidden?: boolean | null,
      forwarded_from?: string | null,
      attachment?: string | null,
      replied_to?: string | null,
      created_at?: number | null,
      updated_at?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWorkspacesQueryVariables = {
  id: string,
};

export type GetWorkspacesQuery = {
  getWorkspaces?:  {
    __typename: "Workspaces",
    id: string,
    name: string,
    slug: string,
    workspace_users?: Array< string > | null,
    address?:  Array< {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null > | null,
    email?: Array< string | null > | null,
    working_hours?:  Array< {
      __typename: "WorkspaceWorkingHours",
      from?: string | null,
      to?: string | null,
      time_format?: number | null,
    } | null > | null,
    phone?:  Array< {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null > | null,
    image?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    company_birthday?: string | null,
    description?: string | null,
    website_address?: string | null,
    industry?:  {
      __typename: "WorkspaceIndustry",
      id?: number | null,
      name?: string | null,
    } | null,
    number_of_employees?:  {
      __typename: "WorkspaceNumberOfEmployees",
      id?: number | null,
      quantity?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListWorkspacesQueryVariables = {
  filter?: ModelWorkspacesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkspacesQuery = {
  listWorkspaces?:  {
    __typename: "ModelWorkspacesConnection",
    items:  Array< {
      __typename: "Workspaces",
      id: string,
      name: string,
      slug: string,
      workspace_users?: Array< string > | null,
      email?: Array< string | null > | null,
      company_birthday?: string | null,
      description?: string | null,
      website_address?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWorkspacesQueryVariables = {
  filter?: ModelWorkspacesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWorkspacesQuery = {
  syncWorkspaces?:  {
    __typename: "ModelWorkspacesConnection",
    items:  Array< {
      __typename: "Workspaces",
      id: string,
      name: string,
      slug: string,
      workspace_users?: Array< string > | null,
      email?: Array< string | null > | null,
      company_birthday?: string | null,
      description?: string | null,
      website_address?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDeliveredMessagesQueryVariables = {
  id: string,
};

export type GetDeliveredMessagesQuery = {
  getDeliveredMessages?:  {
    __typename: "DeliveredMessages",
    id: string,
    message_id: string,
    deliverer_id: string,
    owner_id: string,
    delivered_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDeliveredMessagesQueryVariables = {
  filter?: ModelDeliveredMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDeliveredMessagesQuery = {
  listDeliveredMessages?:  {
    __typename: "ModelDeliveredMessagesConnection",
    items:  Array< {
      __typename: "DeliveredMessages",
      id: string,
      message_id: string,
      deliverer_id: string,
      owner_id: string,
      delivered_at: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDeliveredMessagesQueryVariables = {
  filter?: ModelDeliveredMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDeliveredMessagesQuery = {
  syncDeliveredMessages?:  {
    __typename: "ModelDeliveredMessagesConnection",
    items:  Array< {
      __typename: "DeliveredMessages",
      id: string,
      message_id: string,
      deliverer_id: string,
      owner_id: string,
      delivered_at: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    full_name: string,
    avatar?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    color: string,
    initials: string,
    position?: string | null,
    birthday?: string | null,
    phone?:  {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null,
    location?:  {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null,
    timezone?:  {
      __typename: "Timezone",
      id?: number | null,
      name?: string | null,
    } | null,
    text_status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      email: string,
      first_name: string,
      last_name: string,
      full_name: string,
      color: string,
      initials: string,
      position?: string | null,
      birthday?: string | null,
      text_status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      email: string,
      first_name: string,
      last_name: string,
      full_name: string,
      color: string,
      initials: string,
      position?: string | null,
      birthday?: string | null,
      text_status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateMessageActionsSubscriptionVariables = {
  filter?: ModelSubscriptionMessageActionsFilterInput | null,
};

export type OnCreateMessageActionsSubscription = {
  onCreateMessageActions?:  {
    __typename: "MessageActions",
    id: string,
    action?: MessageActionEnum | null,
    user_id: string,
    message_id: string,
    message_owner: string,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessageActionsSubscriptionVariables = {
  filter?: ModelSubscriptionMessageActionsFilterInput | null,
};

export type OnUpdateMessageActionsSubscription = {
  onUpdateMessageActions?:  {
    __typename: "MessageActions",
    id: string,
    action?: MessageActionEnum | null,
    user_id: string,
    message_id: string,
    message_owner: string,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessageActionsSubscriptionVariables = {
  filter?: ModelSubscriptionMessageActionsFilterInput | null,
};

export type OnDeleteMessageActionsSubscription = {
  onDeleteMessageActions?:  {
    __typename: "MessageActions",
    id: string,
    action?: MessageActionEnum | null,
    user_id: string,
    message_id: string,
    message_owner: string,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSingleChatsSubscriptionVariables = {
  filter?: ModelSubscriptionSingleChatsFilterInput | null,
};

export type OnCreateSingleChatsSubscription = {
  onCreateSingleChats?:  {
    __typename: "SingleChats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id?: string | null,
    is_initial: boolean,
    title_initials?: string | null,
    color?: string | null,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_messag?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    title:  {
      __typename: "Users",
      id: string,
      email: string,
      first_name: string,
      last_name: string,
      full_name: string,
      color: string,
      initials: string,
      position?: string | null,
      birthday?: string | null,
      text_status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    singleChatsTitleId: string,
  } | null,
};

export type OnUpdateSingleChatsSubscriptionVariables = {
  filter?: ModelSubscriptionSingleChatsFilterInput | null,
};

export type OnUpdateSingleChatsSubscription = {
  onUpdateSingleChats?:  {
    __typename: "SingleChats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id?: string | null,
    is_initial: boolean,
    title_initials?: string | null,
    color?: string | null,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_messag?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    title:  {
      __typename: "Users",
      id: string,
      email: string,
      first_name: string,
      last_name: string,
      full_name: string,
      color: string,
      initials: string,
      position?: string | null,
      birthday?: string | null,
      text_status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    singleChatsTitleId: string,
  } | null,
};

export type OnDeleteSingleChatsSubscriptionVariables = {
  filter?: ModelSubscriptionSingleChatsFilterInput | null,
};

export type OnDeleteSingleChatsSubscription = {
  onDeleteSingleChats?:  {
    __typename: "SingleChats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id?: string | null,
    is_initial: boolean,
    title_initials?: string | null,
    color?: string | null,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_messag?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    title:  {
      __typename: "Users",
      id: string,
      email: string,
      first_name: string,
      last_name: string,
      full_name: string,
      color: string,
      initials: string,
      position?: string | null,
      birthday?: string | null,
      text_status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    singleChatsTitleId: string,
  } | null,
};

export type OnCreateChatsSubscriptionVariables = {
  filter?: ModelSubscriptionChatsFilterInput | null,
};

export type OnCreateChatsSubscription = {
  onCreateChats?:  {
    __typename: "Chats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id: string,
    is_initial: boolean,
    title?: string | null,
    title_initials?: string | null,
    color: string,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_message?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateChatsSubscriptionVariables = {
  filter?: ModelSubscriptionChatsFilterInput | null,
};

export type OnUpdateChatsSubscription = {
  onUpdateChats?:  {
    __typename: "Chats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id: string,
    is_initial: boolean,
    title?: string | null,
    title_initials?: string | null,
    color: string,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_message?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteChatsSubscriptionVariables = {
  filter?: ModelSubscriptionChatsFilterInput | null,
};

export type OnDeleteChatsSubscription = {
  onDeleteChats?:  {
    __typename: "Chats",
    id: string,
    user_id: string,
    chat_id: string,
    owner_id: string,
    workspace_id: string,
    is_initial: boolean,
    title?: string | null,
    title_initials?: string | null,
    color: string,
    muted_until?: number | null,
    type: ChatsTypeEnum,
    last_message?:  {
      __typename: "ChatLastMessage",
      content?: string | null,
      sender_id: string,
      created_at: number,
      status: MessagesStatusEnum,
      users_seen?: Array< string > | null,
    } | null,
    chat_members?: Array< string > | null,
    is_admin: boolean,
    is_active: boolean,
    created_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateSeenMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionSeenMessagesFilterInput | null,
};

export type OnCreateSeenMessagesSubscription = {
  onCreateSeenMessages?:  {
    __typename: "SeenMessages",
    id: string,
    message_id: string,
    seener_id: string,
    owner_id: string,
    seen_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSeenMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionSeenMessagesFilterInput | null,
};

export type OnUpdateSeenMessagesSubscription = {
  onUpdateSeenMessages?:  {
    __typename: "SeenMessages",
    id: string,
    message_id: string,
    seener_id: string,
    owner_id: string,
    seen_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSeenMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionSeenMessagesFilterInput | null,
};

export type OnDeleteSeenMessagesSubscription = {
  onDeleteSeenMessages?:  {
    __typename: "SeenMessages",
    id: string,
    message_id: string,
    seener_id: string,
    owner_id: string,
    seen_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionMessagesFilterInput | null,
};

export type OnCreateMessagesSubscription = {
  onCreateMessages?:  {
    __typename: "Messages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionMessagesFilterInput | null,
};

export type OnUpdateMessagesSubscription = {
  onUpdateMessages?:  {
    __typename: "Messages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionMessagesFilterInput | null,
};

export type OnDeleteMessagesSubscription = {
  onDeleteMessages?:  {
    __typename: "Messages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUnreadMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionUnreadMessagesFilterInput | null,
};

export type OnCreateUnreadMessagesSubscription = {
  onCreateUnreadMessages?:  {
    __typename: "UnreadMessages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUnreadMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionUnreadMessagesFilterInput | null,
};

export type OnUpdateUnreadMessagesSubscription = {
  onUpdateUnreadMessages?:  {
    __typename: "UnreadMessages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUnreadMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionUnreadMessagesFilterInput | null,
};

export type OnDeleteUnreadMessagesSubscription = {
  onDeleteUnreadMessages?:  {
    __typename: "UnreadMessages",
    id: string,
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content?: string | null,
    status?: MessagesStatusEnum | null,
    hidden?: boolean | null,
    forwarded_from?: string | null,
    attachment?: string | null,
    replied_to?: string | null,
    created_at?: number | null,
    updated_at?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateWorkspacesSubscriptionVariables = {
  filter?: ModelSubscriptionWorkspacesFilterInput | null,
};

export type OnCreateWorkspacesSubscription = {
  onCreateWorkspaces?:  {
    __typename: "Workspaces",
    id: string,
    name: string,
    slug: string,
    workspace_users?: Array< string > | null,
    address?:  Array< {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null > | null,
    email?: Array< string | null > | null,
    working_hours?:  Array< {
      __typename: "WorkspaceWorkingHours",
      from?: string | null,
      to?: string | null,
      time_format?: number | null,
    } | null > | null,
    phone?:  Array< {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null > | null,
    image?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    company_birthday?: string | null,
    description?: string | null,
    website_address?: string | null,
    industry?:  {
      __typename: "WorkspaceIndustry",
      id?: number | null,
      name?: string | null,
    } | null,
    number_of_employees?:  {
      __typename: "WorkspaceNumberOfEmployees",
      id?: number | null,
      quantity?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateWorkspacesSubscriptionVariables = {
  filter?: ModelSubscriptionWorkspacesFilterInput | null,
};

export type OnUpdateWorkspacesSubscription = {
  onUpdateWorkspaces?:  {
    __typename: "Workspaces",
    id: string,
    name: string,
    slug: string,
    workspace_users?: Array< string > | null,
    address?:  Array< {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null > | null,
    email?: Array< string | null > | null,
    working_hours?:  Array< {
      __typename: "WorkspaceWorkingHours",
      from?: string | null,
      to?: string | null,
      time_format?: number | null,
    } | null > | null,
    phone?:  Array< {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null > | null,
    image?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    company_birthday?: string | null,
    description?: string | null,
    website_address?: string | null,
    industry?:  {
      __typename: "WorkspaceIndustry",
      id?: number | null,
      name?: string | null,
    } | null,
    number_of_employees?:  {
      __typename: "WorkspaceNumberOfEmployees",
      id?: number | null,
      quantity?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteWorkspacesSubscriptionVariables = {
  filter?: ModelSubscriptionWorkspacesFilterInput | null,
};

export type OnDeleteWorkspacesSubscription = {
  onDeleteWorkspaces?:  {
    __typename: "Workspaces",
    id: string,
    name: string,
    slug: string,
    workspace_users?: Array< string > | null,
    address?:  Array< {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null > | null,
    email?: Array< string | null > | null,
    working_hours?:  Array< {
      __typename: "WorkspaceWorkingHours",
      from?: string | null,
      to?: string | null,
      time_format?: number | null,
    } | null > | null,
    phone?:  Array< {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null > | null,
    image?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    company_birthday?: string | null,
    description?: string | null,
    website_address?: string | null,
    industry?:  {
      __typename: "WorkspaceIndustry",
      id?: number | null,
      name?: string | null,
    } | null,
    number_of_employees?:  {
      __typename: "WorkspaceNumberOfEmployees",
      id?: number | null,
      quantity?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDeliveredMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionDeliveredMessagesFilterInput | null,
};

export type OnCreateDeliveredMessagesSubscription = {
  onCreateDeliveredMessages?:  {
    __typename: "DeliveredMessages",
    id: string,
    message_id: string,
    deliverer_id: string,
    owner_id: string,
    delivered_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDeliveredMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionDeliveredMessagesFilterInput | null,
};

export type OnUpdateDeliveredMessagesSubscription = {
  onUpdateDeliveredMessages?:  {
    __typename: "DeliveredMessages",
    id: string,
    message_id: string,
    deliverer_id: string,
    owner_id: string,
    delivered_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDeliveredMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionDeliveredMessagesFilterInput | null,
};

export type OnDeleteDeliveredMessagesSubscription = {
  onDeleteDeliveredMessages?:  {
    __typename: "DeliveredMessages",
    id: string,
    message_id: string,
    deliverer_id: string,
    owner_id: string,
    delivered_at: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    full_name: string,
    avatar?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    color: string,
    initials: string,
    position?: string | null,
    birthday?: string | null,
    phone?:  {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null,
    location?:  {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null,
    timezone?:  {
      __typename: "Timezone",
      id?: number | null,
      name?: string | null,
    } | null,
    text_status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    full_name: string,
    avatar?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    color: string,
    initials: string,
    position?: string | null,
    birthday?: string | null,
    phone?:  {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null,
    location?:  {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null,
    timezone?:  {
      __typename: "Timezone",
      id?: number | null,
      name?: string | null,
    } | null,
    text_status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    full_name: string,
    avatar?:  {
      __typename: "Image",
      small?: string | null,
      medium?: string | null,
      large?: string | null,
      x_large?: string | null,
    } | null,
    color: string,
    initials: string,
    position?: string | null,
    birthday?: string | null,
    phone?:  {
      __typename: "PhoneNumber",
      phone_number?: string | null,
      prefix_id?: number | null,
      prefix?: string | null,
      prefix_country_initials?: string | null,
    } | null,
    location?:  {
      __typename: "Address",
      address?: string | null,
      city?: string | null,
      country_id?: number | null,
      country?: string | null,
      state?: string | null,
      zip_code?: string | null,
    } | null,
    timezone?:  {
      __typename: "Timezone",
      id?: number | null,
      name?: string | null,
    } | null,
    text_status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
