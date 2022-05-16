import { UserUpdateManyWithoutContentsInput } from "./UserUpdateManyWithoutContentsInput";

export type ContentUpdateInput = {
  likes?: UserUpdateManyWithoutContentsInput;
  text?: string | null;
};
