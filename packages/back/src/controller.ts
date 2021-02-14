import { Request, Response } from "express";
import config from './config'

class Controller {
  public index(req: Request, res: Response) {
    const { params, query } = req;
    console.log("params -> ", params);
    console.log("query -> ", query);

    return res.sendFile(`${config.FRONT_PATH}/index.html`)
  }

  public manifest(req: Request, res: Response) {
    console.log("manifest");

    return res.json({ manifest: "data" });
  }
}

export default Controller;
