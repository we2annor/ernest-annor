import { Resend } from "resend";
import { ContactInput } from "../validation/contact";

export async function sendContactEmail(data: ContactInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }

  const resend = new Resend(apiKey);
  const { name, email, subject, message } = data;

  await resend.emails.send({
    from: process.env.FROM_EMAIL || "contact@ernestannor.com",
    to: [
      process.env.TO_EMAIL || "we2annor@gmail.com",
      "contact@ernestannor.com",
    ],
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
