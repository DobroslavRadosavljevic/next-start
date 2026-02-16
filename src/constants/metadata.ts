import type { Route } from "next";

type RouteName = "home" | "about" | "products" | "contact";

export const SITE_NAME = "Next Start";
export const SITE_DESCRIPTION =
  "A Next.js starter template with Tailwind CSS, type-safe routes, and SEO infrastructure.";
export const SITE_TAGLINE = "Next.js starter template";

export const ROUTE_PATHS: Record<RouteName, Route> = {
  home: "/",
  about: "/about",
  products: "/products",
  contact: "/contact",
} as const;

export const PAGE_TITLES: Record<Exclude<RouteName, "home">, string> = {
  about: "About",
  products: "Products",
  contact: "Contact",
} as const;

export const PAGE_DESCRIPTIONS: Record<Exclude<RouteName, "home">, string> = {
  about:
    "Learn about the goals, conventions, and architecture behind this Next.js starter.",
  products:
    "Browse a sample product page and test transitions and reusable route patterns.",
  contact: "Use the contact section to request help or share a project update.",
} as const;

export type { RouteName };
