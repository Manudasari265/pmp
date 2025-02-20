import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
// import * as schema from "./schema.js"

const { Pool } = pg;

const getEnvVariable = (name: string) => {
    const value = process.env[name];
    if(name === null) throw new Error(`environment variables ${name} not found`)
}

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL!,
});

export const db = drizzle({ client: pool });