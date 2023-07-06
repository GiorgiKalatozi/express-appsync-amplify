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
                    user_id: {
                        "S": string
                    },
                    chat_id: {
                        "S": string
                    },
                    owner_id: {
                        S: string
                    },
                    workspace_id: {
                        "S": string
                    },
                    is_initial: {
                        "BOOL": boolean
                    },
                    title: {
                        "S": string
                    },
                    title_initials: {
                        "S": string
                    },
                    is_admin: {
                        "BOOL": boolean
                    },
                    color: {
                        "S": string
                    },
                    muted_until: {
                        "N": string
                    },
                    chat_members: {
                        "L": [string]
                    },
                    type: {
                        "S": string
                    },
                    is_active: {
                        "BOOL": boolean
                    },
                    createdAt: {
                        "S": string
                    },
                    _lastChangedAt: {
                        "N": string
                    },
                    __typename: {
                        "S": string
                    },
                    id: {
                        "S": string
                    },
                    _version: {
                        "N": string
                    },
                    updatedAt: {
                        "S": string
                    },
                    created_at: {
                        "N": any
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