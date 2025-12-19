import { pgEnum } from "drizzle-orm/pg-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

// export const rolesEnum = pgEnum("roles", ["guest", "user", "admin"]);

export const roles= pgEnum("rollan", ["teacher", "student", "schoolkid"])

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  role: roles().default("student"),
});


