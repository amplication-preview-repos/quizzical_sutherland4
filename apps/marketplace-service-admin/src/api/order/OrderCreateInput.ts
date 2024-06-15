import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderNumber?: string | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  shippingAddress?: string | null;
  status?: string | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
