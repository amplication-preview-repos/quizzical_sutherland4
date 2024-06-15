import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  name?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
