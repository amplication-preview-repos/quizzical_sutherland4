import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isRead?: SortOrder;
  receivedAtTimestamp?: SortOrder;
  receiver?: SortOrder;
  sender?: SortOrder;
  sentAt?: SortOrder;
  sentAtTimestamp?: SortOrder;
  updatedAt?: SortOrder;
};
