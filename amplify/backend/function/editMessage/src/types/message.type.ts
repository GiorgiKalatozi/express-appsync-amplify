import { MessageStatus } from "../enums/message.enum";

export type UpdateMessage = {
    id: string,
    message_id: string,
    content: string,
    status: MessageStatus,
    hidden: boolean,
    attachment: string,
    _version: number,
}