import { Resend } from "resend";
import { ContactFormData } from "@ernest-annor/shared";

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  if (!apiKey || !resend) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }

  const { name, email, subject, message } = data;

  await resend.emails.send({
    from: process.env.FROM_EMAIL || "contact@ernestannor.com",
    to: [process.env.TO_EMAIL || "we2annor@gmail.com"],
    reply_to: email,
    subject: `Portfolio Contact: ${subject}`,
    html: `
    <h2>New message from ${name}</h2>
    <p><strong>From:</strong> ${name} (${email})</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <hr />
    <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });
}
