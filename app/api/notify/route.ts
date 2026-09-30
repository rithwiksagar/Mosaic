import { z } from "zod";
import { notifyEmails } from "@/db/schema";
import { db } from "@/db";


const notifySchema = z.object({ email: z.string().email() });

export async function POST(req: Request) {
  const body = await req.json();

  const result = notifySchema.safeParse(body);

  if (!result.success) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const { email } = result.data;

  await db.insert(notifyEmails).values({
    email,
  });

  return Response.json({success: true}, {status : 200});
}
