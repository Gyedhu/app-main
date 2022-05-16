import { User } from "../user/User";

export type Post = {
  content: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User;
};
