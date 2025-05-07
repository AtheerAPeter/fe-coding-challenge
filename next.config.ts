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
};

export default nextConfig;
