import "server-only";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM_ADDRESS = process.env.RESEND_FROM_EMAIL ?? "Ticktan <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactConfirmationEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  if (!resend) {
    console.warn("RESEND_API_KEY not set — skipping confirmation email.");
    return;
  }

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: "We've received your message — Ticktan Limited",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; color: #1f2937;">
          <div style="background-color: #14283a; padding: 24px; border-radius: 12px 12px 0 0;">
            <span style="color: #ffffff; font-size: 20px; font-weight: bold;">Ticktan Limited</span>
          </div>
          <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <p>Hi ${escapeHtml(name)},</p>
            <p>Thanks for reaching out — we've received your message and someone from our team will get back to you soon, usually within one business day.</p>
            <p style="margin-top: 24px; padding: 16px; background-color: #f3f4f1; border-radius: 8px; white-space: pre-wrap; color: #4b5563; font-size: 14px;">${escapeHtml(message)}</p>
            <p style="margin-top: 24px;">Best,<br />The Ticktan Limited team</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send contact confirmation email:", error);
  }
}
