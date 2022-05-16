import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  content?: StringFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
