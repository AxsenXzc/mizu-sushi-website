import type { MetadataRoute } from "next";

const BASE_URL = "https://mizusushiyan.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/chi-siamo",
    "/menu",
    "/galleria",
    "/contatti",
    "/prenotazioni",
    "/privacy",
    "/cookie-policy",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: BASE_URL + route,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
