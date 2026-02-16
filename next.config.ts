import type { NextConfig } from "next";

import { env } from "@/config/env";

const nextConfig: NextConfig = {
  // Enables "use cache" directive; excludes App Router data fetching from
  // pre-renders by default; enables Cache Components (PPR)
  cacheComponents: true,
  typedRoutes: true,

  experimental: {
    viewTransition: true,
    // Persist Turbopack cache to .next for faster dev and builds
    turbopackFileSystemCacheForDev: true,
    turbopackFileSystemCacheForBuild: true,
    // Enables forbidden() and unauthorized() APIs for auth error handling
    authInterrupts: true,
    // Cache fetch responses across HMR refreshes in dev (default: true)
    serverComponentsHmrCache: true,
    // Forward browser logs to terminal (dev only)
    browserDebugInfoInTerminal: true,
    // Client router cache: static prefetched (s), dynamic (s)
    staleTimes: { dynamic: 30, static: 180 },
    // Pinpoint CLS/LCP contributors for debugging
    webVitalsAttribution: ["CLS", "LCP"],
  },
  compiler: {
    // Remove console.* calls in production (reduces bundle, avoids debug leakage)
    removeConsole: env.VERCEL_ENV === "production",
  },
  // Disable X-Powered-By header on HTTP responses
  poweredByHeader: false,
};

export default nextConfig;
