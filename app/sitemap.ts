import { MetadataRoute } from "next";
import { cartas } from "@/app/data/cartas";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://almanaque-contemporaneo.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/arquivo`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/sobre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/comenzar`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/suscribirse`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const cartaPages: MetadataRoute.Sitemap = cartas.map((carta) => ({
    url: `${base}/arquivo/${carta.slug}`,
    lastModified: new Date(carta.data),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...staticPages, ...cartaPages];
}
