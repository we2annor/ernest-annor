export interface BlogPostMeta {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "quick-subscribe-amazon-iap",
    title: "Building Quick Subscribe — Amazon IAP Integration at Scale",
    summary:
      "How we implemented a seamless Amazon In-App Purchase flow on Peacock that increased subscription rates by 40%, and the technical challenges we overcame along the way.",
    publishedAt: "2024-03-15",
    readingTime: "8 min read",
    tags: ["React", "TypeScript", "Amazon IAP", "Streaming"],
    featured: true,
  },
  {
    slug: "lightning-vs-react-tv",
    title: "Lightning vs React — Why Sky Chose WebGL for TV Apps",
    summary:
      "A deep dive into why traditional React rendering falls short for Connected TV devices, and how the Lightning framework uses WebGL to deliver 60fps on resource-constrained hardware.",
    publishedAt: "2024-01-20",
    readingTime: "12 min read",
    tags: ["Lightning", "React", "TV Apps", "Performance"],
    featured: true,
  },
  {
    slug: "frontend-accessibility-streaming",
    title: "Accessibility in Streaming — Beyond the Basics",
    summary:
      "Lessons learned from making NowTV accessible to millions of users, including screen reader support, keyboard navigation, and the unique challenges of TV interfaces.",
    publishedAt: "2023-11-08",
    readingTime: "10 min read",
    tags: ["Accessibility", "WCAG", "React", "Streaming"],
    featured: false,
  },
  {
    slug: "monorepo-architecture-nextjs",
    title: "Structuring a Production Monorepo with Turborepo and Next.js",
    summary:
      "A practical guide to setting up a scalable monorepo with Turborepo, pnpm workspaces, shared packages, and CI/CD — lessons from building this portfolio.",
    publishedAt: "2023-09-12",
    readingTime: "15 min read",
    tags: ["Monorepo", "Turborepo", "Next.js", "Architecture"],
    featured: false,
  },
];

export function formatBlogDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
