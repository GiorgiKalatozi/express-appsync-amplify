export type CreateSingleChat = {
    id: string,
    user_id: string,
    chat_id: string,
    workspace_id: string,
    color: string,
    owner_id: string,
    singleChatsTitleId: string,
    title_initials: string,
    type: string,
    chat_members: [string],
    is_active: boolean,
    is_initial: boolean,
    is_admin: boolean,
    created_at: number,
}