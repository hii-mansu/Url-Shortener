import { Queue } from "bullmq";
import { bullmqRedisConfig } from "./redis.config.js";

export interface AnalyticsJobData {
    urlId: string;
    browser: string;
    device: string;
    ip: string;
}

export const analyticsQueue = new Queue<AnalyticsJobData>("analytics", {
  connection: bullmqRedisConfig,
});