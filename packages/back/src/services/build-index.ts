import { readFileSync } from "fs";
import { IndexBuilder, IndexTag, TAGS_ENUM, AppData } from "../types";
import { generateHeaderTags } from "../lib/generators";

import appMock from "../lib/mock";

class IndexBuilderService {
  protected file = "";
  protected path = "";
  protected meta = {};
  protected generatedTags: string = "";
  protected localFile: string = "";

  constructor({ file, path }: IndexBuilder) {
    this.file = file;
    this.path = path;
  }

  public async build() {
    this.readHtml();
    this.parseHtml();
    this.injectTags();

    return this.localFile;
  }

  private readHtml() {
    this.localFile = readFileSync(this.file, { encoding: "utf-8" });
  }

  private async parseHtml() {
    const app: AppData = this.path === "/" ? appMock.first : appMock.second;

    const tags: IndexTag[] = [
      {
        tag: (value) => `<meta property="twitter:url" content="${value}">`,
        type: TAGS_ENUM.APP_URL,
      },
      {
        tag: (value) => `<meta property="twitter:title" content="${value}">`,
        type: TAGS_ENUM.APP_NAME,
      },
      {
        tag: (value) =>
          `<meta property="twitter:description" content="Hello from ${value} !">`,
        type: TAGS_ENUM.APP_NAME,
      },
      {
        tag: (value) => `<meta property="twitter:image" content="${value}">`,
        type: TAGS_ENUM.APP_IMAGE,
      },
      {
        tag: (value) => `<title>${value}</title>`,
        type: TAGS_ENUM.APP_TITLE,
      },
    ];

    this.generatedTags = generateHeaderTags(tags, app);
  }

  private injectTags() {
    const INJECT_TAG = "<!--header-tags-->";

    this.localFile = this.localFile.replace(INJECT_TAG, this.generatedTags);
  }
}

/**
 * https://refactoring.guru/pt-br/design-patterns/builder/typescript/example#example-0
 * https://everyday.codes/javascript/builder-pattern-in-javascript-without-classes/
 * https://leantechniques.com/rants/functional-builders/
 * https://mostly-adequate.gitbook.io/mostly-adequate-guide/
 */

export default IndexBuilderService;
