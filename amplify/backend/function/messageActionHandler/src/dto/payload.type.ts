import {MessageActionEnum} from "../../../../../../src/models";

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
                NewImage: NewImage,
                SequenceNumber: string,
                SizeBytes: number,
                StreamViewType: string
            }
            eventSourceARN: string
        }
    ]
}

export type NewImage = {
    user_id: {
        "S": string
    },
    action: {
        "S": MessageActionEnum
    },
    message_id: {
        "S": string
    },
    message_owner: {
        "S": string
    },
    created_at: {
        N: string
    }
}