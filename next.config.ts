import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.externals.push('canvas');
    return config;
  },
};

export default nextConfig;
