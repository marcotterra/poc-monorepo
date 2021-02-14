import path from "path";
import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT,
  FRONT_PATH: path.resolve(__dirname, "../../front/dist"),
};
