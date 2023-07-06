import { MessagesStatusEnum } from "../../../../../../src/API.js";

export type Message = {
  id: string;
  message_id: string;
  chat_id: string;
  user_id: string;
  workspace_id: string;
  is_initial: boolean;
  initiator_id: string;
  content: string;
  status: MessagesStatusEnum;
  hidden: boolean;
  forwarded_from?: string | null;
  attachment?: string | null;
  created_at: number;
};
