import type { MetadataRoute } from "next";

const siteUrl = "https://framebuild-studios.diego681936.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: siteUrl, es: `${siteUrl}/es` } },
    },
    {
      url: `${siteUrl}/es`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: siteUrl, es: `${siteUrl}/es` } },
    },
  ];
}
