import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ProductWhereInput = {
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  name?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
};
