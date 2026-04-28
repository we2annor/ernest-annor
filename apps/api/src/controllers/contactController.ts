import { Request, Response } from "express";
import { contactSchema } from "../validation/contact";
import { Contact } from "../models/Contact";
import { sendContactEmail } from "../services/emailService";

export async function submitContact(
  req: Request,
  res: Response
): Promise<void> {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      error: "validation failed",
      details: result.error.flatten().fieldErrors,
    });
    return;
  }

  try {
    await Contact.create(result.data);
    console.log("✅ Contact saved to database");

    try {
      await sendContactEmail(result.data);
      console.log("✅ Email sent successfully");
    } catch (emailError) {
      console.error("❌ Email send failed:", emailError);
    }

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("❌ Contact submission error:", error);
    res
      .status(500)
      .json({ error: "Failed to send message. Please try again." });
  }
}
