import { Product } from "../product/Product";
import { User } from "../user/User";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  isVerified: boolean | null;
  product?: Product | null;
  rating: number | null;
  updatedAt: Date;
  user?: User | null;
};
