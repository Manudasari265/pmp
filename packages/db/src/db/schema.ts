import { relations } from "drizzle-orm";
import { 
    pgTable, 
    text, 
    uuid,
    varchar,
    timestamp,
    boolean,
    integer,
    pgEnum,
    primaryKey
} from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: uuid("id").primaryKey().defaultRandom(),
    username: varchar("username", { length: 255 }).unique().notNull(),
    email: varchar("email", { length: 255 }).unique().notNull(),
    password: text("password").notNull(),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

export const userRelations = relations(users, ({ many }) => ({
    projects: many(projects),
}));

export const projects = pgTable('projects', {
    id: uuid("id").primaryKey().defaultRandom(),
    project_name: varchar("project_name", { length: 255 }).notNull(),
    url: varchar("url", { length: 255 }).unique().notNull(),
    is_private: boolean("is_private").notNull().default(true),
    authorId: uuid("user_id").notNull().references(() => users.id),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

export const projectRelations = relations(projects, ({ one }) => ({
    user: one(users, {
        fields: [projects.authorId],
        references: [users.id]
    }),
}));