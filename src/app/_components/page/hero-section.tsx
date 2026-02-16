import Link from "next/link";

import { ROUTE_PATHS, SITE_DESCRIPTION, SITE_NAME } from "@/constants/metadata";

export const HeroSection = () => (
  <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center gap-8 px-6 text-center">
    <h1 className="text-3xl font-semibold tracking-tight">{SITE_NAME}</h1>
    <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
      {SITE_DESCRIPTION}
    </p>
    <p className="text-sm text-zinc-500 dark:text-zinc-500">
      Click below to test view transitions between pages.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        href={ROUTE_PATHS.about}
        className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
      >
        About →
      </Link>
      <Link
        href={ROUTE_PATHS.products}
        className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
      >
        Products →
      </Link>
      <Link
        href={ROUTE_PATHS.contact}
        className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:opacity-90"
      >
        Contact →
      </Link>
    </div>
    <Link
      href="https://nextjs.org/docs"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-zinc-500 underline hover:text-foreground"
    >
      Next.js docs
    </Link>
  </div>
);
