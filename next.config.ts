import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
    unoptimized: true, // ✅ disable Vercel image optimization
  },
};

export default nextConfig;
