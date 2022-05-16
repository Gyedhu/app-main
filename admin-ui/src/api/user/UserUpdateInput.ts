import { ContentWhereUniqueInput } from "../content/ContentWhereUniqueInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  content?: ContentWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  username?: string;
};
