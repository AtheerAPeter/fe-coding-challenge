import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        //  to accommodate for path.html migration
        source: "/:path(.+?)\\.html",
        destination: "/:path",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "cs3.wettercomassets.com",
        protocol: "https",
        pathname: "/images/interview/**",
      },
    ],
  },
};

export default nextConfig;
