import { NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_EMAIL = "vidhanvyrs@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { email } = await request.json().catch(() => ({ email: null }));

    if (typeof email !== "string" || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "PushupPro <onboarding@resend.dev>",
      to: NOTIFY_EMAIL,
      subject: "New PushupPro signup",
      text: `New email signup from the landing page: ${email}`,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json(
        { error: "Failed to send email", detail: error.message },
        { status: 502 }
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error in /api/subscribe:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
