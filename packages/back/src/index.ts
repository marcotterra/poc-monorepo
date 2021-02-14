import express from "express";
import history from "connect-history-api-fallback";

import router from "./router";
import config from "./config";

const port = config.PORT;

const app = express();

app.use(router);
app.use(history());
app.use(express.static(config.FRONT_PATH));

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
