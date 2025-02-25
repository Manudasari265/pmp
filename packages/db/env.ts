import {config } from "dotenv";
import { expand } from "dotenv-expand";

import { z, ZodError } from "zod";

const stringBoolean = z.coerce.string().transform((val) => {
    return val === "true";
}).default("false");

const EnvSchema = z.object({
    DATABASE_URL: z.string(),
})

export type EnvSchema = z.infer<typeof EnvSchema>;

expand(config());

try {
    EnvSchema.parse(process.env);
} catch (error) {
    if(error instanceof ZodError) {
        let message = "Missing required vales in .env:\n";
        error.issues.forEach((issue) => {
            message += issue.path[0] + "\n";
        });
        const e = new Error(message);
        e.stack = "";
    } else {
        console.log(error);
    }
}

export default EnvSchema.parse(process.env);
