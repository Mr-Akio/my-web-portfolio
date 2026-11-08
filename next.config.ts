import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages ? { basePath: "/my-web-portfolio", output: "export" } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
