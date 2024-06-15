import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dimensions?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  name?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  shippingOptions?: SortOrder;
  status?: SortOrder;
  stockQuantity?: SortOrder;
  updatedAt?: SortOrder;
  weight?: SortOrder;
};
