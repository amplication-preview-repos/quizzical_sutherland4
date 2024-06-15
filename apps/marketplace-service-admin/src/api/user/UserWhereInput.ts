import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type UserWhereInput = {
  billingAddress?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  profilePicture?: JsonFilter;
  reviews?: ReviewListRelationFilter;
  role?: "Option1";
  shippingAddress?: StringNullableFilter;
  username?: StringFilter;
  wishlists?: WishlistListRelationFilter;
};
