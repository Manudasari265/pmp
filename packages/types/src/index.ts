import { z } from "zod";

export const UserValidationSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().max(100).min(10),
})

export const ProjectValidationSchema = z.object({
    project_name: z
       .string()
       .min(3, "Project name must be at least 3 characters long")
       .max(255, "Project name cannot exceed 255 characters"),
    url: z
       .string()
       .url("Invalid URL format"),
    is_private: z
       .boolean()
       .optional()
       .default(true),
});

export type ProjectInferType = z.infer<typeof ProjectValidationSchema>;