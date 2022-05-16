import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
