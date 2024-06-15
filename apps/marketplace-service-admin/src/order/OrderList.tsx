import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Orders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="carrier" source="carrier" />
        <TextField label="carrierInformation" source="carrierInformation" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="orderNumber" source="orderNumber" />
        <TextField label="orderStatus" source="orderStatus" />
        <TextField label="shippingAddress" source="shippingAddress" />
        <TextField label="status" source="status" />
        <TextField label="totalAmount" source="totalAmount" />
        <TextField label="trackingNumber" source="trackingNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
