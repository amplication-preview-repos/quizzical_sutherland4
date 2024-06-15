import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";
import { WishlistCreateNestedManyWithoutProductsInput } from "./WishlistCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: string | null;
  description?: string | null;
  dimensions?: string | null;
  images?: InputJsonValue;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  shippingOptions?: Array<"Option1">;
  status?: "Option1" | null;
  stockQuantity?: number | null;
  weight?: number | null;
  wishlists?: WishlistCreateNestedManyWithoutProductsInput;
};
