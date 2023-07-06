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
                OldImage: any,
                NewImage: {
                    _ttl: { N: number},
                    is_initial: { BOOL: boolean },
                    _deleted: { BOOL: boolean },
                    _lastChangedAt: { N: number },
                    __typename: { S: string },
                    created_at: { N: number },
                    message_id: { S: string },
                    content: { S: string },
                    chat_id: { S: string },
                    workspace_id: { S: string },
                    createdAt: { S: string },
                    initiator_id: { S: string },
                    user_id: { S: string },
                    id: { S: string },
                    _version: { N: number },
                    status: { S: string },
                    updatedAt: { S: string }
                }
                SequenceNumber: string,
                SizeBytes: number,
                StreamViewType: string
            }
            eventSourceARN: string
        }
    ]
}