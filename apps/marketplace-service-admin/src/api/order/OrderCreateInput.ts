import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  carrier?: string | null;
  carrierInformation?: string | null;
  orderNumber?: string | null;
  orderStatus?: "Option1" | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  shippingAddress?: string | null;
  status?: string | null;
  totalAmount?: number | null;
  trackingNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
