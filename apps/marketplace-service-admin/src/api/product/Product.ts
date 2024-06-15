import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  category: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  images: JsonValue;
  name: string | null;
  order?: Order | null;
  price: number | null;
  reviews?: Array<Review>;
  updatedAt: Date;
};
