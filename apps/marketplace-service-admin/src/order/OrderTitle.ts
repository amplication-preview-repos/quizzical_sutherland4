import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "carrier";

export const OrderTitle = (record: TOrder): string => {
  return record.carrier?.toString() || String(record.id);
};
