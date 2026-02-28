import Link from "next/link";

export const Nav = () => (
  <nav
    className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 border-b border-zinc-200 backdrop-blur dark:border-zinc-800"
    aria-label="Main"
  >
    <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
      <Link
        href="/"
        className="text-foreground text-lg font-semibold tracking-tight"
      >
        Next Start
      </Link>
    </div>
  </nav>
);
