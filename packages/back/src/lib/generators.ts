import { AppData, IndexTag, TAGS_ENUM } from "../types";
import config from "../config";

function returnTag(tag: Function, type: TAGS_ENUM, app: AppData) {
  switch (type) {
    case TAGS_ENUM.APP_NAME:
      return tag(app.name);

    case TAGS_ENUM.APP_URL:
      return tag(`${config.URL}/${app.slug}`);

    case TAGS_ENUM.APP_IMAGE:
      return tag(app.image);

    case TAGS_ENUM.APP_TITLE:
      return tag(`Page: ${app.name}`)

    default:
      return "";
  }
}

function generateHeaderTags(tags: IndexTag[], app: AppData): string {
  return tags.map(({ tag, type }) => returnTag(tag, type, app)).join('');
}

export { generateHeaderTags };
