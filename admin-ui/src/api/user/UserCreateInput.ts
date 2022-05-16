import { ContentWhereUniqueInput } from "../content/ContentWhereUniqueInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  content?: ContentWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  posts?: PostCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  username: string;
};
