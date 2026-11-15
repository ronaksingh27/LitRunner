import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/HomePage", destination: "/#home", permanent: true },
      { source: "/work/litrunner", destination: "/work/ashsovereign", permanent: true },
    ];
  },
};

export default nextConfig;
