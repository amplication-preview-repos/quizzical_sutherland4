import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  carrier: string | null;
  carrierInformation: string | null;
  createdAt: Date;
  id: string;
  orderNumber: string | null;
  orderStatus?: "Option1" | null;
  products?: Array<Product>;
  shippingAddress: string | null;
  status: string | null;
  totalAmount: number | null;
  trackingNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
