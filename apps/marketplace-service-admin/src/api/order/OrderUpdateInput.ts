import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderNumber?: string | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  shippingAddress?: string | null;
  status?: string | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
