export type GraphQLRequestDto = {
    query: string,
    variables: {
        input?: any | null,
        filter?: any | null,
        limit?: number | null,
    }
}