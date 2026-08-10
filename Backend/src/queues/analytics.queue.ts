import { Queue } from "bullmq";
import { bullmqRedisConfig } from "./redis.config.js";


export const analyticsQueue = new Queue("analytics", {
  connection: bullmqRedisConfig,
});