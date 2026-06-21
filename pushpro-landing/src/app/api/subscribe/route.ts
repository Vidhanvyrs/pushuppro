import { NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_EMAIL = "rharki@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const { email } = await request.json().catch(() => ({ email: null }));

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "PushupPro <onboarding@resend.dev>",
    to: NOTIFY_EMAIL,
    subject: "New PushupPro signup",
    text: `New email signup from the landing page: ${email}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
