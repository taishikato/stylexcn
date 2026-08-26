import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const docsDir = path.dirname(fileURLToPath(import.meta.url));
const kitSrc = path.resolve(docsDir, "../../src");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@stylexcn": kitSrc,
    };
    return config;
  },
};

export default nextConfig;
