import { MetadataRoute } from "next";
import { allRoutes, site } from "@/lib/client-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    url: `${site.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  }));
}
