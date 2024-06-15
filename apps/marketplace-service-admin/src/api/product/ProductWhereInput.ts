import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ProductWhereInput = {
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  dimensions?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  name?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
  status?: "Option1";
  stockQuantity?: IntNullableFilter;
  weight?: FloatNullableFilter;
  wishlists?: WishlistListRelationFilter;
};
