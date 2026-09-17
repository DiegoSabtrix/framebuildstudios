import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://framebuild-studios.diego681936.chatgpt.site/sitemap.xml",
    host: "https://framebuild-studios.diego681936.chatgpt.site",
  };
}
