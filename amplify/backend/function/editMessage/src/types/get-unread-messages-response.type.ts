import {UpdateMessage} from "./message.type";

export type GetUnreadMessagesResponse = {
    data: {
        listUnreadMessages: {
            items: Array<UpdateMessage>
        }
    }
}