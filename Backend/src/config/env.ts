import { cleanEnv, port, str } from "envalid";
import dotenv from "dotenv";

dotenv.config()

export const env = cleanEnv(process.env, {
  NODE_ENV: str({
    choices: ["development", "production", "test"],
    default: "development",
  }),

  PORT: port({
    default: 5000,
  }),

  MONGO_URI: str(),

  JWT_SECRET: str(),

  JWT_EXPIRES_IN: str(),

  REDIS_URL: str(),
});