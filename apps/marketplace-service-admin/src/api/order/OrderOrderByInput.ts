import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  carrier?: SortOrder;
  carrierInformation?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderNumber?: SortOrder;
  orderStatus?: SortOrder;
  shippingAddress?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  trackingNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
