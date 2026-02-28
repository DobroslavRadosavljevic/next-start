import { withSentryConfig } from "@sentry/nextjs";
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

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: env.SENTRY_ORG,

  project: env.SENTRY_PROJECT,

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  webpack: {
    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    // Tree-shaking options for reducing bundle size
    treeshake: {
      // Automatically tree-shake Sentry logger statements to reduce bundle size
      removeDebugLogging: true,
    },
  },
});
