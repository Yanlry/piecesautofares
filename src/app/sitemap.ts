import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { categories } from "@/data/categories";

const staticRoutes: Array<{ path: string; priority: number }> = [
  { path: "", priority: 1 },
  { path: "/pieces", priority: 0.9 },
  { path: "/services", priority: 0.6 },
  { path: "/a-propos", priority: 0.5 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    priority,
  }));

  const categoryEntries = categories.map((category) => ({
    url: `${siteUrl}/pieces/${category.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  return [...staticEntries, ...categoryEntries];
}
