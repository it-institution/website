import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  distDir: process.env.NODE_ENV === "production" ? ".next" : ".next-dev",

  compiler: {
    // Remove console logs only in production, excluding error logs
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },

  // For additional debugging in Lighthouse
  productionBrowserSourceMaps: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  reactStrictMode: true,
  experimental: {
    // Trade off FCP, LCP and TTFB
    inlineCss: true,

    // optimizePackageImports: [
    //   "@radix-ui/react-icons",
    //   "@react-three/drei",
    //   "@react-three/fiber",
    //   "matter-js",
    //   "three",
    // ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
        port: "",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**/*",
      },
      {
        // https://placehold.co
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "recipe1.ezmember.co.kr",
        port: "",
        pathname: "/**/*",
      },
    ],
  },
};

export default withMDX(nextConfig);
