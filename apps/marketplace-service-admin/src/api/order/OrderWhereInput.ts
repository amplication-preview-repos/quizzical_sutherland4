import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  carrier?: StringNullableFilter;
  carrierInformation?: StringNullableFilter;
  id?: StringFilter;
  orderNumber?: StringNullableFilter;
  orderStatus?: "Option1";
  products?: ProductListRelationFilter;
  shippingAddress?: StringNullableFilter;
  status?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
  trackingNumber?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
