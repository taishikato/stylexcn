import type { MetadataRoute } from "next";
import { COMPONENTS } from "../src/catalog";
import { SITE_URL } from "../src/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const componentPages = COMPONENTS.map(({ slug }) => ({
    url: `${SITE_URL}/docs/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/docs`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...componentPages,
  ];
}
