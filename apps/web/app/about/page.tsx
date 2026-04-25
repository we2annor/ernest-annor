import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { PersonalSection } from "@/components/sections/PersonalSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Ernest Annor - Senior Software Engineer with 8+ years of experience building high-performance web applications.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SkillsSection />
      <PersonalSection />
    </>
  );
}
