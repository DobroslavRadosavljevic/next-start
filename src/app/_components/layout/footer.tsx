import Link from "next/link";

export const Footer = () => (
  <footer className="border-t border-zinc-200 py-12 dark:border-zinc-800">
    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6">
      <div>
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          Next Start
        </Link>
        <p className="mt-2 text-sm text-zinc-500">© 2025 Next Start</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-foreground">Connect</h3>
        <p className="mt-2 text-sm text-zinc-500">Follow us for updates.</p>
      </div>
    </div>
  </footer>
);
