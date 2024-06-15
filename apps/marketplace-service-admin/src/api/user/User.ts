import { Order } from "../order/Order";
import { JsonValue } from "type-fest";
import { Review } from "../review/Review";
import { Wishlist } from "../wishlist/Wishlist";

export type User = {
  billingAddress: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  profilePicture: JsonValue;
  reviews?: Array<Review>;
  role?: "Option1" | null;
  roles: JsonValue;
  shippingAddress: string | null;
  updatedAt: Date;
  username: string;
  wishlists?: Array<Wishlist>;
};
