import { z } from "zod";

export const createUrlSchema = z.object({
    originalUrl: z
        .string()
        .trim()
        .url("Please provide a valid URL.")
        .max(2048, "URL is too long."),

    expiresAt: z
        .string()
        .datetime({ offset: true })
        .optional()
        .nullable(),
});

export const updateUrlSchema = z.object({
    originalUrl: z
        .string()
        .trim()
        .url("Please provide a valid URL.")
        .max(2048, "URL is too long.")
        .optional(),

    isActive: z
        .boolean()
        .optional(),

    expiresAt: z
        .string()
        .datetime({ offset: true })
        .optional()
        .nullable(),
});