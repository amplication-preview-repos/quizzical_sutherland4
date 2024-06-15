import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  isVerified?: boolean | null;
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
