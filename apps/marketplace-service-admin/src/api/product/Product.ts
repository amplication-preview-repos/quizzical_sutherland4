import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";
import { Wishlist } from "../wishlist/Wishlist";

export type Product = {
  category: string | null;
  createdAt: Date;
  description: string | null;
  dimensions: string | null;
  id: string;
  images: JsonValue;
  name: string | null;
  order?: Order | null;
  price: number | null;
  reviews?: Array<Review>;
  shippingOptions?: Array<"Option1">;
  status?: "Option1" | null;
  stockQuantity: number | null;
  updatedAt: Date;
  weight: number | null;
  wishlists?: Array<Wishlist>;
};
