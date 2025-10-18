import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /* config options here */
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  eslint:{
    ignoreDuringBuilds: true,
  },
  experimental:{
    reactCompiler: true,
  },
  webpack: (config) => {
    config.externals.push('canvas');
    return config;
  },
};

export default nextConfig;
