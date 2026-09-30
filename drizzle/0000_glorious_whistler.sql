CREATE TABLE "notify_emails" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "notify_emails_email_unique" UNIQUE("email")
);
