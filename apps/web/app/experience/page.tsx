import type { Metadata } from "next";
import { ExperiencePage } from "@/components/sections/ExperiencePage";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Ernest Annor's full career history — 8+ years across Sky, AND Digital, and OLM Systems.",
};

export default function Experience() {
  return <ExperiencePage />;
}
