import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <BooleanInput label="isRead" source="isRead" />
        <DateTimeInput
          label="receivedAtTimestamp"
          source="receivedAtTimestamp"
        />
        <TextInput label="Receiver" source="receiver" />
        <TextInput label="Sender" source="sender" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <DateTimeInput label="sentAtTimestamp" source="sentAtTimestamp" />
      </SimpleForm>
    </Create>
  );
};
