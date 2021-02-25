import express from "express";
import history from "connect-history-api-fallback";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";

import router from "./router";
import config from "./config";

async function createServer() {
  try {
    const app = express();
    const frontend = express.static(config.FRONT_PATH, { index: false });
    const logger = morgan(config.ENV === "production" ? "combined" : "dev", {
      skip: (req, res) => res.statusCode < 400,
    });

    app.use(logger);
    app.use(helmet());
    app.use(frontend);
    app.use(router);
    app.use(history());

    if (config.ENV === "production") {
      app.use(compression);
    }

    return { app };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

createServer().then(({ app }) => {
  app.listen(config.PORT, () => {
    console.log(`server started at http://localhost:${config.PORT}`);
  });
});
