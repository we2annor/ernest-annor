import type { Metadata } from "next";
import { ProjectsPage } from "@/components/sections/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Ernest Annor's projects — from large-scale streaming platforms to e-commerce and SaaS.",
};

export default function Projects() {
  return <ProjectsPage />;
}
