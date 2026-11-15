import type { NextConfig } from "next";
const isGiithuPages = process.env.GITHUB_PAGES === 'true';
const repoName = '/Slim-Web-Doc';

const nextConfig: NextConfig = {
  output: isGiithuPages ? 'export' : undefined,
  cacheComponents: !isGiithuPages,
  basePath: isGiithuPages ? repoName : '',
  images: {
    unoptimized: isGiithuPages,
  },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  partialPrefetching: true,
};

export default nextConfig;
