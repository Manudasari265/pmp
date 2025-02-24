import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";

export default defineConfig({
    schema: "./src/schema.ts",
    out: "./drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL as string 
    },
    verbose: true,
    strict: true,
}) satisfies Config;