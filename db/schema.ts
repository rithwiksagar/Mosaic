import {
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";


export const notifyEmails = pgTable("notify_emails", {
    id: serial("id").primaryKey(),

    email: text("email").notNull().unique(),

    createdAt: timestamp("created_at").defaultNow().notNull()
})