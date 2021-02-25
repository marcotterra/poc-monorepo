interface AppData {
  slug: string;
  name: string;
  image: string;
}

interface IndexBuilder {
  file: string;
  path: string;
}

enum TAGS_ENUM {
  APP_URL,
  APP_NAME,
  APP_IMAGE,
  APP_TITLE,
}

interface IndexTag {
  tag(value: string): string;
  type: TAGS_ENUM;
}

export { AppData, IndexBuilder, IndexTag, TAGS_ENUM };
