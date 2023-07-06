export type ChatMembersResponse = {
  data: {
    listChats: {
      items: [
        {
          chat_members: Array<string>;
        }
      ];
    };
  };
};
