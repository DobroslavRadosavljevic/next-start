import type { Route } from "next";

import Link from "next/link";

const pages = [{ href: "/", label: "Home" }] as const satisfies readonly {
  href: Route;
  label: string;
}[];

export const Nav = () => (
  <nav
    className="sticky top-0 z-50 border-b border-zinc-200 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 dark:border-zinc-800"
    aria-label="Main"
  >
    <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight text-foreground"
      >
        Next Start
      </Link>
      <ul className="flex gap-6">
        {pages.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-foreground"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);
