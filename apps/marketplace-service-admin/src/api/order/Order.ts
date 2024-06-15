import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderNumber: string | null;
  products?: Array<Product>;
  shippingAddress: string | null;
  status: string | null;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
