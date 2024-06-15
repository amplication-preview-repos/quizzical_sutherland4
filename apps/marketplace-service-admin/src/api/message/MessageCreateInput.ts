export type MessageCreateInput = {
  content?: string | null;
  isRead?: boolean | null;
  receivedAtTimestamp?: Date | null;
  receiver?: string | null;
  sender?: string | null;
  sentAt?: Date | null;
  sentAtTimestamp?: Date | null;
};
