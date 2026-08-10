import { Worker } from "bullmq";
import { bullmqRedisConfig } from "./redis.config.js";
import analyticsService from "../mudules/analytics/analytics.service.js";
import { getCountryFromIp } from "../shared/lib/geoip.js";

export const analyticsWorker = new Worker(
    "analytics",
    async (job) => {
        if (job.name !== "record-click") {
            return;
        }

        const { urlId, browser, device, ip } = job.data;

        const country = getCountryFromIp(ip);

        await analyticsService.recordClick({
            urlId,
            browser,
            device,
            country,
        });
    },
    {
        connection: bullmqRedisConfig,
    }
);

analyticsWorker.on("completed", (job) => {
    console.log(`Analytics job ${job.id} completed.`);
});

analyticsWorker.on("failed", (job, error) => {
    console.error(`Analytics job ${job?.id} failed:`, error);
});