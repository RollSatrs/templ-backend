CREATE TYPE "public"."rollan" AS ENUM('teacher', 'student', 'schoolkid');--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "role" "rollan" DEFAULT 'student';