import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: true,
  outputFileTracingRoot: require('path').join(__dirname, '../..'),
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/tr/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
