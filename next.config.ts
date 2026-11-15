import type { NextConfig } from "next";
const isGiithuPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: isGiithuPages ? 'export' : undefined,
  cacheComponents: !isGiithuPages,
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  partialPrefetching: true,
};

export default nextConfig;
