import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static HTML export for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages doesn’t support Next.js image optimization
  },
  basePath: "/poc",
  assetPrefix: "/poc/",
};

export default nextConfig;
