import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="Receiver" source="receiver" />
        <TextInput label="Sender" source="sender" />
        <DateTimeInput label="sentAt" source="sentAt" />
      </SimpleForm>
    </Create>
  );
};
