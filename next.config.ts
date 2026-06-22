import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Nota: il sito usa solo immagini locali (public/) e mappe via iframe,
  // quindi non e' necessaria alcuna configurazione images.remotePatterns.
  // Se in futuro si usano immagini remote con next/image, aggiungere qui
  // gli host specifici (evitare il wildcard "**").
};

export default nextConfig;
