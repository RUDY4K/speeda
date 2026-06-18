import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { getAllPostsMeta } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/use-cases", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/use-cases/restaurants", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/use-cases/cafes", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/use-cases/chains", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/integrations", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/demo", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/dpa", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  ];

  const blogPosts = getAllPostsMeta().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticRoutes = routes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  return [...staticRoutes, ...blogPosts];
}
