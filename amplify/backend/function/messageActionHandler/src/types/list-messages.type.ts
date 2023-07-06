import { Message } from "./message.type";

export type ListMessages = {
    data: {
        listMessages: {
            items: [Message],
            nextToken: string
        }
    }
}