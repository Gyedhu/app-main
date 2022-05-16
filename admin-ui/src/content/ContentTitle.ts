import { Content as TContent } from "../api/content/Content";

export const CONTENT_TITLE_FIELD = "id";

export const ContentTitle = (record: TContent): string => {
  return record.id || record.id;
};
