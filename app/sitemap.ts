import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const routes = [
    { path: "/", priority: 1 },
    { path: "/servicios", priority: 0.9 },
    { path: "/transformaciones", priority: 0.8 },
    { path: "/contacto", priority: 0.8 },
    { path: "/aviso-legal", priority: 0.3 },
    { path: "/politica-privacidad", priority: 0.3 },
    { path: "/politica-cookies", priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
