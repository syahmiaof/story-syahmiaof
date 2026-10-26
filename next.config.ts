import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Local high-fidelity images directly from public
  },
};

export default nextConfig;
