import { User } from "../user/User";

export type Content = {
  createdAt: Date;
  id: string;
  likes?: Array<User>;
  text: string | null;
  updatedAt: Date;
};
