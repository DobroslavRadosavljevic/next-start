import Link from "next/link";

import { ROUTE_PATHS } from "@/constants/metadata";

export const Footer = () => (
  <footer className="border-t border-zinc-200 py-12 dark:border-zinc-800">
    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
      <div>
        <Link
          href={ROUTE_PATHS.home}
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          Next Start
        </Link>
        <p className="mt-2 text-sm text-zinc-500">© 2025 Next Start</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-foreground">Product</h3>
        <ul className="mt-2 space-y-2">
          <li>
            <Link
              href={ROUTE_PATHS.products}
              className="text-sm text-zinc-500 transition-colors hover:text-foreground"
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-medium text-foreground">Company</h3>
        <ul className="mt-2 space-y-2">
          <li>
            <Link
              href={ROUTE_PATHS.about}
              className="text-sm text-zinc-500 transition-colors hover:text-foreground"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={ROUTE_PATHS.contact}
              className="text-sm text-zinc-500 transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-medium text-foreground">Connect</h3>
        <p className="mt-2 text-sm text-zinc-500">Follow us for updates.</p>
      </div>
    </div>
  </footer>
);
