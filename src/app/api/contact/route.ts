import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Contact API: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured. Please contact me directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const { name, email, subject, message, _gotcha } = body;

    // Honeypot anti-spam check (bots fill this in, humans cannot see it)
    if (_gotcha) {
      return NextResponse.json({ success: true, message: "Delivered" });
    }

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Please provide your email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please provide a message." },
        { status: 400 }
      );
    }

    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "matthewgana95@gmail.com";

    // Escape HTML to prevent injection in email body
    const sanitize = (str: string) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const safeName = sanitize(name.trim());
    const safeEmail = sanitize(email.trim());
    const safeSubject = sanitize((subject || "General Inquiry").trim());
    const safeMessage = sanitize(message.trim());

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [receiverEmail],
      replyTo: email.trim(),
      subject: `[Portfolio Inquiry] ${safeSubject} from ${safeName}`,
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #ffffff; color: #111827;">
          <h2 style="color: #111827; margin-bottom: 16px; border-bottom: 2px solid #22c55e; padding-bottom: 8px; font-size: 20px;">
            New Portfolio Message
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 600; width: 90px; font-size: 14px;">From:</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 700; font-size: 14px;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 600; font-size: 14px;">Email:</td>
              <td style="padding: 8px 0; font-size: 14px;">
                <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: underline;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 600; font-size: 14px;">Topic:</td>
              <td style="padding: 8px 0; color: #111827; font-size: 14px;">${safeSubject}</td>
            </tr>
          </table>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; border-left: 4px solid #22c55e; margin-bottom: 20px;">
            <div style="color: #6b7280; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
              Message Content
            </div>
            <p style="color: #1f2937; white-space: pre-wrap; margin: 0; line-height: 1.6; font-size: 14px;">${safeMessage}</p>
          </div>
          <div style="font-size: 12px; color: #9ca3af; border-top: 1px solid #f3f4f6; padding-top: 12px; text-align: center;">
            Sent directly from your portfolio contact form. Hit <strong>Reply</strong> to respond directly to ${safeName}.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend delivery error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: unknown) {
    console.error("Contact API internal error:", err);
    return NextResponse.json(
      { error: "Unable to process inquiry at this moment." },
      { status: 500 }
    );
  }
}
