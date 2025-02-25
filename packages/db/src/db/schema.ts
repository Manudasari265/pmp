import { 
    pgTable, 
    timestamp, 
    uuid, 
    varchar 
} from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull(),
    createdAt: timestamp("created_at", { mode: "string"}).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string"}).notNull().defaultNow()
})