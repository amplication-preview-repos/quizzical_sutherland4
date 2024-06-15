export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  isRead: boolean | null;
  receivedAtTimestamp: Date | null;
  receiver: string | null;
  sender: string | null;
  sentAt: Date | null;
  sentAtTimestamp: Date | null;
  updatedAt: Date;
};
