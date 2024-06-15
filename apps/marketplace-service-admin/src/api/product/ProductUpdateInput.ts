import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";
import { WishlistUpdateManyWithoutProductsInput } from "./WishlistUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: string | null;
  description?: string | null;
  dimensions?: string | null;
  images?: InputJsonValue;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  shippingOptions?: Array<"Option1">;
  status?: "Option1" | null;
  stockQuantity?: number | null;
  weight?: number | null;
  wishlists?: WishlistUpdateManyWithoutProductsInput;
};
