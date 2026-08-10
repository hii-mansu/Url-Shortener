import { env } from "../config/env.js";

const redisUrl = new URL(env.REDIS_URL);

export const bullmqRedisConfig = {
    host: redisUrl.hostname,
    port: Number(redisUrl.port),
    username: redisUrl.username,
    password: redisUrl.password,
    maxRetriesPerRequest: null,
};