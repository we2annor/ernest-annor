import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { ExperienceSection } from "@/components/sections/ExperienceSsection";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProjectSection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectSection />
      <ExperienceSection />
      <ContactCTASection />
    </>
  );
}
