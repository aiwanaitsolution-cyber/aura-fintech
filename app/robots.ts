import { MetadataRoute } from "next";
import { site } from "@/lib/client-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.baseUrl}/sitemap.xml`
  };
}
