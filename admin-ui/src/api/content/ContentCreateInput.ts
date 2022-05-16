import { UserCreateNestedManyWithoutContentsInput } from "./UserCreateNestedManyWithoutContentsInput";

export type ContentCreateInput = {
  likes?: UserCreateNestedManyWithoutContentsInput;
  text?: string | null;
};
