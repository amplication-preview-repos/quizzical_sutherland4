import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: string | null;
  description?: string | null;
  images?: InputJsonValue;
  name?: string | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
};
