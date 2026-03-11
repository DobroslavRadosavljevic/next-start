import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

import { eden } from "@/api/eden";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/constants/metadata";

const starterHighlights = [
  {
    id: "ui",
    label: "UI foundation",
    title: "Ship a polished shell from the first commit.",
    description:
      "App Router, Tailwind v4, and shadcn/base-nova primitives are already lined up for product work.",
  },
  {
    id: "api",
    label: "API bridge",
    title: "Keep your frontend and backend speaking the same language.",
    description:
      "Elysia + Eden gives you a type-safe path from server handlers to route components without ceremony.",
  },
  {
    id: "ops",
    label: "Release hygiene",
    title: "Start with the boring-but-important pieces in place.",
    description:
      "Typed routes, Sentry, Analytics, tests, and build gates are part of the default contract instead of afterthoughts.",
  },
] as const;

const starterStats = [
  {
    id: "stack",
    value: "16",
    label: "Next.js runtime",
  },
  {
    id: "ui",
    value: "shadcn",
    label: "base-nova UI kit",
  },
  {
    id: "api",
    value: "Eden",
    label: "live API bridge",
  },
] as const;

const starterCommands = [
  "bun dev",
  "bun run typecheck",
  "bun run test",
] as const;

export const HeroSection = async () => {
  const [helloResponse, mirrorResponse] = await Promise.all([
    eden.get(),
    eden.post({
      name: "Eden",
    }),
  ]);

  return (
    <div className="from-background via-background to-muted/60 relative overflow-hidden bg-gradient-to-b">
      <div className="from-primary/12 via-primary/6 absolute inset-x-0 top-0 h-64 bg-radial to-transparent" />
      <div className="bg-accent/80 absolute right-0 bottom-0 h-80 w-80 rounded-full blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:py-24">
        <section className="grid min-h-[calc(100vh-16rem)] gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="border-border/80 bg-background/80 text-muted-foreground rounded-full px-3 py-1 text-[0.7rem] tracking-[0.24em] uppercase"
            >
              {SITE_NAME} • {SITE_TAGLINE}
            </Badge>

            <div className="space-y-4">
              <h1 className="text-foreground max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Build something real before you lose momentum.
              </h1>

              <p className="text-muted-foreground max-w-2xl text-base leading-7 sm:text-lg">
                {SITE_DESCRIPTION} The page below gives the starter a stronger
                opening state without turning it into a template museum.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/api/openapi"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-transparent px-3 text-sm font-medium whitespace-nowrap shadow-sm transition-all outline-none active:translate-y-px"
              >
                Explore API docs
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
              </Link>

              <Link
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background/80 text-foreground hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border px-3 text-sm font-medium whitespace-nowrap transition-all outline-none active:translate-y-px"
              >
                Read Next.js docs
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {starterStats.map((item) => (
                <Card
                  key={item.id}
                  size="sm"
                  className="border-border/80 bg-card/75 shadow-sm backdrop-blur"
                >
                  <CardContent className="space-y-1 py-1">
                    <p className="text-foreground text-2xl font-semibold tracking-tight">
                      {item.value}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-border/80 bg-card/90 shadow-lg backdrop-blur">
            <CardHeader className="border-border/80 gap-3 border-b">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge className="bg-primary text-primary-foreground rounded-full">
                  Live starter check
                </Badge>

                <span className="text-primary inline-flex items-center gap-2 text-xs font-medium tracking-[0.24em] uppercase">
                  <span className="bg-primary size-2 rounded-full" />
                  Server component
                </span>
              </div>

              <div className="space-y-1">
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  The API bridge is already live on first render.
                </CardTitle>

                <CardDescription className="text-muted-foreground max-w-xl text-sm leading-6">
                  This panel uses the existing Eden client inside the homepage
                  server component, so the design stays honest about the stack.
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="border-border/80 bg-muted/70 rounded-2xl border p-4">
                  <p className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
                    GET /api
                  </p>
                  <p className="text-foreground mt-3 text-lg font-medium tracking-tight">
                    {helloResponse.data}
                  </p>
                </div>

                <div className="border-border/80 bg-background rounded-2xl border p-4">
                  <p className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
                    POST /api
                  </p>
                  <p className="text-foreground mt-3 text-lg font-medium tracking-tight">
                    {mirrorResponse.data?.name ?? "No response"}
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Payload: <code>{'{ name: "Eden" }'}</code>
                  </p>
                </div>
              </div>

              <Separator className="bg-border/80" />

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-foreground text-sm font-medium">
                    Suggested first-run commands
                  </p>

                  <p className="text-muted-foreground text-xs tracking-[0.24em] uppercase">
                    Bun-first workflow
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {starterCommands.map((command) => (
                    <code
                      key={command}
                      className="border-border bg-muted text-muted-foreground rounded-full border px-3 py-1 text-sm"
                    >
                      {command}
                    </code>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="border-border/80 bg-muted/70 items-start justify-between gap-4">
              <p className="text-muted-foreground max-w-md text-sm leading-6">
                Start in <code>src/app/_components/page</code>, keep reusable
                primitives in <code>src/components/ui</code>, and grow the app
                without rewriting the shell later.
              </p>

              <Link
                href="/api/openapi"
                className="text-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors"
              >
                Inspect the generated schema
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
              </Link>
            </CardFooter>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {starterHighlights.map((item) => (
            <Card
              key={item.id}
              className="border-border/80 bg-card/80 shadow-sm backdrop-blur"
            >
              <CardHeader className="space-y-3">
                <div className="text-muted-foreground inline-flex items-center gap-2 text-sm font-medium">
                  <span className="bg-primary/10 text-primary inline-flex size-8 items-center justify-center rounded-full">
                    <HugeiconsIcon
                      icon={CheckmarkCircle02Icon}
                      strokeWidth={2}
                    />
                  </span>
                  {item.label}
                </div>

                <div className="space-y-2">
                  <CardTitle className="text-foreground text-xl">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-6">
                    {item.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
};
