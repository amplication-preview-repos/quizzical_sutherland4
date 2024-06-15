import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  billingAddress?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  profilePicture?: SortOrder;
  role?: SortOrder;
  roles?: SortOrder;
  shippingAddress?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
