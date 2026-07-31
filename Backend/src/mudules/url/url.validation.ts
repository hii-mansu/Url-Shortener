import { z } from "zod";

export const createUrlSchema = z.object({
    body: z.object({
        originalUrl: z
            .string()
            .trim()
            .url("Please provide a valid URL."),
    }),
});