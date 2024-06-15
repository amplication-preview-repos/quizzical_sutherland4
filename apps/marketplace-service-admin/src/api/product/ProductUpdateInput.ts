import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: string | null;
  description?: string | null;
  images?: InputJsonValue;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
};
