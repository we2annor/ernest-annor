import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ernestannor.com";

  const staticRoutes = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/contact",
    "/cv",
    "/blog",
    "/uses",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = [
    "/blog/quick-subscribe-amazon-iap",
    "/blog/lightning-vs-react-tv",
    "/blog/frontend-accessibility-streaming",
    "/blog/monorepo-architecture-nextjs",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
