import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  carrier?: string | null;
  carrierInformation?: string | null;
  orderNumber?: string | null;
  orderStatus?: "Option1" | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  shippingAddress?: string | null;
  status?: string | null;
  totalAmount?: number | null;
  trackingNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
