import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use standalone output only for self-hosted or Docker-style deployments.
  // Vercel handles the platform adapter automatically and does not require it.
  output: process.env.VERCEL ? undefined : "standalone",
};

export default nextConfig;
