import { MetadataRoute } from "next";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://growthescalators.com";
  const serviceRoutes = services.map(s => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const industryRoutes = industries.map(i => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const caseStudyRoutes = caseStudies.map(c => ({
    url: `${base}/results/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/results`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/book-strategy-call`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...serviceRoutes,
    ...industryRoutes,
    ...caseStudyRoutes,
  ];
}
