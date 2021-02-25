import { Request, Response } from "express";

import config from "./config";
import IndexBuilderService from "./services/build-index";

class Controller {
  public async index(req: Request, res: Response) {
    const { path } = req;

    const file = `${config.FRONT_PATH}/index.html`;

    const indexBuilder = new IndexBuilderService({ file, path });

    const response = await indexBuilder.build();

    return res.send(response);
  }

  public manifest(req: Request, res: Response) {
    return res.json({ manifest: "data" });
  }
}

export default Controller;
