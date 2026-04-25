import type { Metadata } from "next";
import { BlogListPage } from "@/components/sections/BlogListPage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ernest Annor's thoughts on frontend architecture, performance, accessibility, and engineering at scale.",
};

export default function Blog() {
  return <BlogListPage />;
}
