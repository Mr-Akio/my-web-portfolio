import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/my-web-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
