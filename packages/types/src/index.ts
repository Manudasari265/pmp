import { z } from "zod";

export const UserTypeSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().max(100).min(10),
})

export const ProjectTypeSchema = z.object({
    name: z.string(),
    url: z.string().url(),
    private: z.boolean()
})