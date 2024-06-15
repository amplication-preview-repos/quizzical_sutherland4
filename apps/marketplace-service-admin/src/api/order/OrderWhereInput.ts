import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  orderNumber?: StringNullableFilter;
  products?: ProductListRelationFilter;
  shippingAddress?: StringNullableFilter;
  status?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
