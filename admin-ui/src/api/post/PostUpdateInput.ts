import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  content?: string;
  user?: UserWhereUniqueInput;
};
