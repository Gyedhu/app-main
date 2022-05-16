import { Content } from "../content/Content";
import { Post } from "../post/Post";

export type User = {
  content?: Content | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  posts?: Array<Post>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
