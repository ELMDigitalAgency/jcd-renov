import type { NextConfig } from "next";

import { buildRedirects } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return buildRedirects();
  },
};

export default nextConfig;
