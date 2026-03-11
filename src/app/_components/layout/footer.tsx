import Link from "next/link";

export const Footer = () => (
  <footer className="border-border border-t py-12">
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6">
      <div>
        <Link
          href="/"
          className="text-foreground text-sm font-semibold tracking-tight"
        >
          Next Start
        </Link>
        <p className="text-muted-foreground mt-2 text-sm">© 2026 Next Start</p>
      </div>
      <div>
        <h3 className="text-foreground text-sm font-medium">Connect</h3>
        <p className="text-muted-foreground mt-2 text-sm">
          Follow us for updates.
        </p>
      </div>
    </div>
  </footer>
);
