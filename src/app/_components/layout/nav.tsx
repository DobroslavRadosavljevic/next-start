import Link from "next/link";

export const Nav = () => (
  <nav
    className="bg-background/95 border-border supports-backdrop-filter:bg-background/60 z-sticky sticky top-0 border-b backdrop-blur"
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
