import { 
    pgTable, 
    text, 
    uuid,
    varchar,
    timestamp
} from "drizzle-orm/pg-core";


export const user = pgTable('user', {
    id: uuid("id").primaryKey().defaultRandom(),
    username: varchar("username", { length: 255 }).unique().notNull(),
    email: varchar("email", { length: 255 }).unique().notNull(),
    password: text("password").notNull(),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
})