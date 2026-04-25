import type { Metadata } from "next";
import { UsesPage } from "@/components/sections/UsesPage";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "Ernest Annor's tools, setup, and technology preferences — the stack behind the engineer.",
};

export default function Uses() {
  return <UsesPage />;
}
