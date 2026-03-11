import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";

export const Nav = () => (
  <nav
    className="border-border/80 bg-background/95 supports-backdrop-filter:bg-background/95 sticky top-0 z-50 border-b backdrop-blur"
    aria-label="Main"
  >
    <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
      <Link
        href="/"
        className="text-foreground text-lg font-semibold tracking-tight"
      >
        Next Start
      </Link>
      <ThemeToggle />
    </div>
  </nav>
);
