import type { Metadata } from "next";
import { CVPage } from "@/components/sections/CVPage";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Ernest Annor's CV — Senior Software Engineer with 8+ years of experience.",
};

export default function CV() {
  return <CVPage />;
}
