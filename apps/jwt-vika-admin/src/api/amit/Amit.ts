import { JsonValue } from "type-fest";

export type Amit = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userName: string;
  username: string;
  roles: JsonValue;
};
