import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  PasswordInput,
  TextInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const AmitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <PasswordInput label="Password" source="password" />
        <TextInput label="UserName" source="userName" />
        <TextInput label="Username" source="username" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
