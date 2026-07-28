import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().trim().min(3, "Name is too short.").max(50, "Name should be of less than 50."),
    email: z.string().trim().email("Invalid email"),
    password: z.string().min(8, "Password must be of 8 characters."),
});