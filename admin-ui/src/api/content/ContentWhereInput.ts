import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContentWhereInput = {
  id?: StringFilter;
  likes?: UserListRelationFilter;
  text?: StringNullableFilter;
};
