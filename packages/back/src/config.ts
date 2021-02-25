import path from "path";
import dotenv from "dotenv";

dotenv.config();

export default {
  URL: process.env.URL,
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  FRONT_PATH: path.resolve(__dirname, "../../front/dist"),
};
