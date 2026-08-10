import { Worker } from "bullmq";
import analyticsService from "../mudules/analytics/analytics.service.js";
import { bullmqRedisConfig } from "./redis.config.js";


export const analyticsWorker = new Worker(
    "analytics",
    async (job) => {
        if (job.name === "record-click") {
            await analyticsService.recordClick(job.data);
        }
    },
    {
        connection: bullmqRedisConfig,
    }
);

analyticsWorker.on("completed", (job) => {
    console.log(`Analytics job ${job.id} completed.`);
});

analyticsWorker.on("failed", (job, error) => {
    console.error(
        `Analytics job ${job?.id} failed:`,
        error
    );
});