import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  content: string;
  user: UserWhereUniqueInput;
};
