import { ContactSection } from "@/components/sections/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ernest Annor — open to new opportunities, collaborations, and conversations.",
};

export default function ContactPage() {
  return <ContactSection />;
}
