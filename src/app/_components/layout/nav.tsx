import Link from "next/link";

export const Nav = () => (
  <nav
    className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/95"
    aria-label="Main"
  >
    <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight text-slate-900"
      >
        Next Start
      </Link>
    </div>
  </nav>
);
