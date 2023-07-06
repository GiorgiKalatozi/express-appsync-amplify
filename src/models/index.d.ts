import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum MessageActionEnum {
  DELIVER_MESSAGE = "DELIVER_MESSAGE",
  SEEN_MESSAGE = "SEEN_MESSAGE",
  TRANSFER_MESSAGE = "TRANSFER_MESSAGE"
}

export enum ChatsTypeEnum {
  SINGLE = "SINGLE",
  GROUP = "GROUP"
}

export enum ChatsRoleEnum {
  OWNER = "OWNER",
  ADMIN = "ADMIN",
  USER = "USER"
}

export enum MessagesStatusEnum {
  SENT = "SENT",
  DELIVERED = "DELIVERED",
  SEEN = "SEEN"
}

type EagerAddress = {
  readonly address?: string | null;
  readonly city?: string | null;
  readonly country_id?: number | null;
  readonly country?: string | null;
  readonly state?: string | null;
  readonly zip_code?: string | null;
}

type LazyAddress = {
  readonly address?: string | null;
  readonly city?: string | null;
  readonly country_id?: number | null;
  readonly country?: string | null;
  readonly state?: string | null;
  readonly zip_code?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

type EagerPhoneNumber = {
  readonly phone_number?: string | null;
  readonly prefix_id?: number | null;
  readonly prefix?: string | null;
  readonly prefix_country_initials?: string | null;
}

type LazyPhoneNumber = {
  readonly phone_number?: string | null;
  readonly prefix_id?: number | null;
  readonly prefix?: string | null;
  readonly prefix_country_initials?: string | null;
}

export declare type PhoneNumber = LazyLoading extends LazyLoadingDisabled ? EagerPhoneNumber : LazyPhoneNumber

export declare const PhoneNumber: (new (init: ModelInit<PhoneNumber>) => PhoneNumber)

type EagerImage = {
  readonly small?: string | null;
  readonly medium?: string | null;
  readonly large?: string | null;
  readonly x_large?: string | null;
}

type LazyImage = {
  readonly small?: string | null;
  readonly medium?: string | null;
  readonly large?: string | null;
  readonly x_large?: string | null;
}

export declare type Image = LazyLoading extends LazyLoadingDisabled ? EagerImage : LazyImage

export declare const Image: (new (init: ModelInit<Image>) => Image)

type EagerWorkspaceIndustry = {
  readonly id?: number | null;
  readonly name?: string | null;
}

type LazyWorkspaceIndustry = {
  readonly id?: number | null;
  readonly name?: string | null;
}

export declare type WorkspaceIndustry = LazyLoading extends LazyLoadingDisabled ? EagerWorkspaceIndustry : LazyWorkspaceIndustry

export declare const WorkspaceIndustry: (new (init: ModelInit<WorkspaceIndustry>) => WorkspaceIndustry)

type EagerWorkspaceWorkingHours = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly time_format?: number | null;
  readonly timezone?: Timezone | null;
}

type LazyWorkspaceWorkingHours = {
  readonly from?: string | null;
  readonly to?: string | null;
  readonly time_format?: number | null;
  readonly timezone?: Timezone | null;
}

export declare type WorkspaceWorkingHours = LazyLoading extends LazyLoadingDisabled ? EagerWorkspaceWorkingHours : LazyWorkspaceWorkingHours

export declare const WorkspaceWorkingHours: (new (init: ModelInit<WorkspaceWorkingHours>) => WorkspaceWorkingHours)

type EagerWorkspaceNumberOfEmployees = {
  readonly id?: number | null;
  readonly quantity?: string | null;
}

type LazyWorkspaceNumberOfEmployees = {
  readonly id?: number | null;
  readonly quantity?: string | null;
}

export declare type WorkspaceNumberOfEmployees = LazyLoading extends LazyLoadingDisabled ? EagerWorkspaceNumberOfEmployees : LazyWorkspaceNumberOfEmployees

export declare const WorkspaceNumberOfEmployees: (new (init: ModelInit<WorkspaceNumberOfEmployees>) => WorkspaceNumberOfEmployees)

type EagerChatLastMessage = {
  readonly content?: string | null;
  readonly sender_id: string;
  readonly created_at: number;
  readonly status: MessagesStatusEnum | keyof typeof MessagesStatusEnum;
  readonly users_seen?: string[] | null;
}

type LazyChatLastMessage = {
  readonly content?: string | null;
  readonly sender_id: string;
  readonly created_at: number;
  readonly status: MessagesStatusEnum | keyof typeof MessagesStatusEnum;
  readonly users_seen?: string[] | null;
}

export declare type ChatLastMessage = LazyLoading extends LazyLoadingDisabled ? EagerChatLastMessage : LazyChatLastMessage

export declare const ChatLastMessage: (new (init: ModelInit<ChatLastMessage>) => ChatLastMessage)

type EagerTimezone = {
  readonly id?: number | null;
  readonly name?: string | null;
}

type LazyTimezone = {
  readonly id?: number | null;
  readonly name?: string | null;
}

export declare type Timezone = LazyLoading extends LazyLoadingDisabled ? EagerTimezone : LazyTimezone

export declare const Timezone: (new (init: ModelInit<Timezone>) => Timezone)

type EagerMessageActions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageActions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly action?: MessageActionEnum | keyof typeof MessageActionEnum | null;
  readonly user_id: string;
  readonly message_id: string;
  readonly message_owner: string;
  readonly created_at: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessageActions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessageActions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly action?: MessageActionEnum | keyof typeof MessageActionEnum | null;
  readonly user_id: string;
  readonly message_id: string;
  readonly message_owner: string;
  readonly created_at: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MessageActions = LazyLoading extends LazyLoadingDisabled ? EagerMessageActions : LazyMessageActions

export declare const MessageActions: (new (init: ModelInit<MessageActions>) => MessageActions) & {
  copyOf(source: MessageActions, mutator: (draft: MutableModel<MessageActions>) => MutableModel<MessageActions> | void): MessageActions;
}

type EagerSingleChats = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SingleChats, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id: string;
  readonly chat_id: string;
  readonly owner_id: string;
  readonly workspace_id?: string | null;
  readonly is_initial: boolean;
  readonly title_initials?: string | null;
  readonly color?: string | null;
  readonly muted_until?: number | null;
  readonly type: ChatsTypeEnum | keyof typeof ChatsTypeEnum;
  readonly last_messag?: ChatLastMessage | null;
  readonly chat_members?: string[] | null;
  readonly is_admin: boolean;
  readonly is_active: boolean;
  readonly created_at: number;
  readonly title: Users;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly singleChatsTitleId: string;
}

type LazySingleChats = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SingleChats, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id: string;
  readonly chat_id: string;
  readonly owner_id: string;
  readonly workspace_id?: string | null;
  readonly is_initial: boolean;
  readonly title_initials?: string | null;
  readonly color?: string | null;
  readonly muted_until?: number | null;
  readonly type: ChatsTypeEnum | keyof typeof ChatsTypeEnum;
  readonly last_messag?: ChatLastMessage | null;
  readonly chat_members?: string[] | null;
  readonly is_admin: boolean;
  readonly is_active: boolean;
  readonly created_at: number;
  readonly title: AsyncItem<Users>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly singleChatsTitleId: string;
}

export declare type SingleChats = LazyLoading extends LazyLoadingDisabled ? EagerSingleChats : LazySingleChats

export declare const SingleChats: (new (init: ModelInit<SingleChats>) => SingleChats) & {
  copyOf(source: SingleChats, mutator: (draft: MutableModel<SingleChats>) => MutableModel<SingleChats> | void): SingleChats;
}

type EagerChats = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chats, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id: string;
  readonly chat_id: string;
  readonly owner_id: string;
  readonly workspace_id: string;
  readonly is_initial: boolean;
  readonly title?: string | null;
  readonly title_initials?: string | null;
  readonly color: string;
  readonly muted_until?: number | null;
  readonly type: ChatsTypeEnum | keyof typeof ChatsTypeEnum;
  readonly last_message?: ChatLastMessage | null;
  readonly chat_members?: string[] | null;
  readonly is_admin: boolean;
  readonly is_active: boolean;
  readonly created_at: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChats = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chats, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user_id: string;
  readonly chat_id: string;
  readonly owner_id: string;
  readonly workspace_id: string;
  readonly is_initial: boolean;
  readonly title?: string | null;
  readonly title_initials?: string | null;
  readonly color: string;
  readonly muted_until?: number | null;
  readonly type: ChatsTypeEnum | keyof typeof ChatsTypeEnum;
  readonly last_message?: ChatLastMessage | null;
  readonly chat_members?: string[] | null;
  readonly is_admin: boolean;
  readonly is_active: boolean;
  readonly created_at: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Chats = LazyLoading extends LazyLoadingDisabled ? EagerChats : LazyChats

export declare const Chats: (new (init: ModelInit<Chats>) => Chats) & {
  copyOf(source: Chats, mutator: (draft: MutableModel<Chats>) => MutableModel<Chats> | void): Chats;
}

type EagerSeenMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SeenMessages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message_id: string;
  readonly seener_id: string;
  readonly owner_id: string;
  readonly seen_at: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySeenMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SeenMessages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message_id: string;
  readonly seener_id: string;
  readonly owner_id: string;
  readonly seen_at: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SeenMessages = LazyLoading extends LazyLoadingDisabled ? EagerSeenMessages : LazySeenMessages

export declare const SeenMessages: (new (init: ModelInit<SeenMessages>) => SeenMessages) & {
  copyOf(source: SeenMessages, mutator: (draft: MutableModel<SeenMessages>) => MutableModel<SeenMessages> | void): SeenMessages;
}

type EagerMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Messages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message_id: string;
  readonly chat_id: string;
  readonly user_id: string;
  readonly workspace_id: string;
  readonly is_initial: boolean;
  readonly initiator_id: string;
  readonly content?: string | null;
  readonly status?: MessagesStatusEnum | keyof typeof MessagesStatusEnum | null;
  readonly hidden?: boolean | null;
  readonly forwarded_from?: string | null;
  readonly attachment?: string | null;
  readonly replied_to?: string | null;
  readonly created_at?: number | null;
  readonly updated_at?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Messages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message_id: string;
  readonly chat_id: string;
  readonly user_id: string;
  readonly workspace_id: string;
  readonly is_initial: boolean;
  readonly initiator_id: string;
  readonly content?: string | null;
  readonly status?: MessagesStatusEnum | keyof typeof MessagesStatusEnum | null;
  readonly hidden?: boolean | null;
  readonly forwarded_from?: string | null;
  readonly attachment?: string | null;
  readonly replied_to?: string | null;
  readonly created_at?: number | null;
  readonly updated_at?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Messages = LazyLoading extends LazyLoadingDisabled ? EagerMessages : LazyMessages

export declare const Messages: (new (init: ModelInit<Messages>) => Messages) & {
  copyOf(source: Messages, mutator: (draft: MutableModel<Messages>) => MutableModel<Messages> | void): Messages;
}

type EagerUnreadMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UnreadMessages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message_id: string;
  readonly chat_id: string;
  readonly user_id: string;
  readonly workspace_id: string;
  readonly is_initial: boolean;
  readonly initiator_id: string;
  readonly content?: string | null;
  readonly status?: MessagesStatusEnum | keyof typeof MessagesStatusEnum | null;
  readonly hidden?: boolean | null;
  readonly forwarded_from?: string | null;
  readonly attachment?: string | null;
  readonly replied_to?: string | null;
  readonly created_at?: number | null;
  readonly updated_at?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUnreadMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UnreadMessages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message_id: string;
  readonly chat_id: string;
  readonly user_id: string;
  readonly workspace_id: string;
  readonly is_initial: boolean;
  readonly initiator_id: string;
  readonly content?: string | null;
  readonly status?: MessagesStatusEnum | keyof typeof MessagesStatusEnum | null;
  readonly hidden?: boolean | null;
  readonly forwarded_from?: string | null;
  readonly attachment?: string | null;
  readonly replied_to?: string | null;
  readonly created_at?: number | null;
  readonly updated_at?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UnreadMessages = LazyLoading extends LazyLoadingDisabled ? EagerUnreadMessages : LazyUnreadMessages

export declare const UnreadMessages: (new (init: ModelInit<UnreadMessages>) => UnreadMessages) & {
  copyOf(source: UnreadMessages, mutator: (draft: MutableModel<UnreadMessages>) => MutableModel<UnreadMessages> | void): UnreadMessages;
}

type EagerWorkspaces = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workspaces, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly workspace_users?: string[] | null;
  readonly address?: (Address | null)[] | null;
  readonly email?: (string | null)[] | null;
  readonly working_hours?: (WorkspaceWorkingHours | null)[] | null;
  readonly phone?: (PhoneNumber | null)[] | null;
  readonly image?: Image | null;
  readonly company_birthday?: string | null;
  readonly description?: string | null;
  readonly website_address?: string | null;
  readonly industry?: WorkspaceIndustry | null;
  readonly number_of_employees?: WorkspaceNumberOfEmployees | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkspaces = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Workspaces, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly workspace_users?: string[] | null;
  readonly address?: (Address | null)[] | null;
  readonly email?: (string | null)[] | null;
  readonly working_hours?: (WorkspaceWorkingHours | null)[] | null;
  readonly phone?: (PhoneNumber | null)[] | null;
  readonly image?: Image | null;
  readonly company_birthday?: string | null;
  readonly description?: string | null;
  readonly website_address?: string | null;
  readonly industry?: WorkspaceIndustry | null;
  readonly number_of_employees?: WorkspaceNumberOfEmployees | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Workspaces = LazyLoading extends LazyLoadingDisabled ? EagerWorkspaces : LazyWorkspaces

export declare const Workspaces: (new (init: ModelInit<Workspaces>) => Workspaces) & {
  copyOf(source: Workspaces, mutator: (draft: MutableModel<Workspaces>) => MutableModel<Workspaces> | void): Workspaces;
}

type EagerDeliveredMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DeliveredMessages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message_id: string;
  readonly deliverer_id: string;
  readonly owner_id: string;
  readonly delivered_at: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDeliveredMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DeliveredMessages, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message_id: string;
  readonly deliverer_id: string;
  readonly owner_id: string;
  readonly delivered_at: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DeliveredMessages = LazyLoading extends LazyLoadingDisabled ? EagerDeliveredMessages : LazyDeliveredMessages

export declare const DeliveredMessages: (new (init: ModelInit<DeliveredMessages>) => DeliveredMessages) & {
  copyOf(source: DeliveredMessages, mutator: (draft: MutableModel<DeliveredMessages>) => MutableModel<DeliveredMessages> | void): DeliveredMessages;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly full_name: string;
  readonly avatar?: Image | null;
  readonly color: string;
  readonly initials: string;
  readonly position?: string | null;
  readonly birthday?: string | null;
  readonly phone?: PhoneNumber | null;
  readonly location?: Address | null;
  readonly timezone?: Timezone | null;
  readonly text_status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly full_name: string;
  readonly avatar?: Image | null;
  readonly color: string;
  readonly initials: string;
  readonly position?: string | null;
  readonly birthday?: string | null;
  readonly phone?: PhoneNumber | null;
  readonly location?: Address | null;
  readonly timezone?: Timezone | null;
  readonly text_status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}