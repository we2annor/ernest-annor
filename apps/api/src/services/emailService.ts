import { Resend } from "resend";
import { ContactFormData } from "@ernest-annor/shared";

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  if (!apiKey || !resend) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }

  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const subject = escapeHtml(data.subject);
  const message = escapeHtml(data.message).replace(/\n/g, "<br/>");

  await resend.emails.send({
    from: process.env.FROM_EMAIL || "contact@ernestannor.com",
    to: [process.env.TO_EMAIL || "we2annor@gmail.com"],
    reply_to: data.email,
    subject: `Portfolio Contact: ${subject}`,
    html: `
    <h2>New message from ${name}</h2>
    <p><strong>From:</strong> ${name} (${email})</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <hr />
    <p>${message}</p>
    `,
  });
}
