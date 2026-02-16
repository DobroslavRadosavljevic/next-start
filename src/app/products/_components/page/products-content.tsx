import Link from "next/link";

import { ROUTE_PATHS } from "@/constants/metadata";

export const ProductsContent = () => (
  <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center gap-8 px-6 text-center">
    <h1 className="text-3xl font-semibold tracking-tight">Products</h1>
    <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
      Navigate between pages to test view transitions. Each link triggers a
      smooth fade and slide animation.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        href={ROUTE_PATHS.home}
        className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
      >
        Home
      </Link>
      <Link
        href={ROUTE_PATHS.about}
        className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
      >
        ← About
      </Link>
      <Link
        href={ROUTE_PATHS.contact}
        className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
      >
        Contact →
      </Link>
    </div>
  </div>
);
