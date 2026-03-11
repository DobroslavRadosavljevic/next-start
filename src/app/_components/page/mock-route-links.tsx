import Link from "next/link";

const mockRoutes = [
  {
    href: "/about",
    label: "About",
    description: "Static marketing-style page with a short narrative.",
  },
  {
    href: "/features",
    label: "Features",
    description: "Feature checklist content for early product scoping.",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Simple contact mock with form placeholder content.",
  },
] as const;

export const MockRouteLinks = ({ currentPath }: { currentPath?: string }) => (
  <div className="grid gap-3 sm:grid-cols-3">
    {mockRoutes
      .filter((route) => route.href !== currentPath)
      .map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className="border-border hover:bg-accent/40 rounded-lg border p-3 transition-colors"
        >
          <p className="text-foreground text-sm font-medium">{route.label}</p>
          <p className="text-muted-foreground mt-1 text-xs leading-5">
            {route.description}
          </p>
        </Link>
      ))}
    {currentPath === "/about" || currentPath === "/features" || currentPath === "/contact" ? (
      <Link
        href="/"
        className="border-primary/30 hover:bg-primary/10 text-primary rounded-lg border border-dashed p-3 transition-colors"
      >
        <p className="text-sm font-medium">Home</p>
        <p className="text-muted-foreground mt-1 text-xs leading-5">
          Return to the homepage and primary hero.
        </p>
      </Link>
    ) : null}
  </div>
);
