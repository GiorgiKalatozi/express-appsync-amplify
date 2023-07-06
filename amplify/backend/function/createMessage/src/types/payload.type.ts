import {MessageStatus} from "../enums/message.enum";

export type Payload = {
    Records: [
        {
            eventID: string,
            eventName: string,
            "eventVersion": string,
            "eventSource": string,
            "awsRegion": string,
            dynamodb: {
                ApproximateCreationDateTime: number,
                Keys: {
                    id: {
                        S: string
                    }
                },
                 NewImage: {
                    workspace_id: {
                        "S": string
                    },
                    createdAt: {
                        "S": string
                    },
                    is_initial: {
                        "BOOL": boolean
                    },
                     forwarded_from: {
                         "S": string
                     },
                    _lastChangedAt: {
                        "N": string
                    },
                    user_id: {
                        "S": string
                    },
                    __typename: {
                        "S": string
                    },
                    message_id: {
                        "S": string
                    },
                    id: {
                        "S": string
                    },
                    _version: {
                        "N": string
                    },
                    chat_id: {
                        "S": string
                    },
                    updatedAt: {
                        "S": string
                    },
                    created_at: {
                        "N": any
                    },
                    status: {
                        S: MessageStatus
                    },
                    content: {
                        "S": string
                    },
                    initiator_id: {
                        S: string
                    },
                     replied_to: {
                        S: string
                     },
                }
                SequenceNumber: string,
                SizeBytes: number,
                StreamViewType: string
            }
            eventSourceARN: string
        }
    ]
}