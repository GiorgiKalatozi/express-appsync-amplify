import { MessageStatus } from "../enums/message.enum";

export type CreateMessage = {
    message_id: string,
    chat_id: string,
    user_id: string,
    workspace_id: string,
    is_initial: boolean,
    initiator_id: string,
    content: string,
    status: MessageStatus,
    hidden: boolean,
    forwarded_from?: string,
    replied_to?: string,
    attachment: string,
    created_at: number
}