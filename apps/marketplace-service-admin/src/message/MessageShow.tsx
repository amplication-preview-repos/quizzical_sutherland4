import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isRead" source="isRead" />
        <TextField label="receivedAtTimestamp" source="receivedAtTimestamp" />
        <TextField label="Receiver" source="receiver" />
        <TextField label="Sender" source="sender" />
        <TextField label="sentAt" source="sentAt" />
        <TextField label="sentAtTimestamp" source="sentAtTimestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
