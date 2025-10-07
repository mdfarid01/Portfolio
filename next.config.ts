import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // use remotePatterns to avoid the `images.domains` deprecation warning
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.thefarid.xyz",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
