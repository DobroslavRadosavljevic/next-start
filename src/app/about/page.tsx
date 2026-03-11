import {
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

import { MockRouteLinks } from "@/app/_components/page/mock-route-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const aboutBullets = [
  "Starter-focused architecture notes and stack rationale.",
  "Minimal route and layout split for incremental scaling.",
  "Type-safe APIs, typed routes, and quality gates in one contract.",
] as const;

export default function AboutPage() {
  return (
    <main className="relative isolate overflow-hidden px-6 pb-14 pt-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <Card className="border-border/80 bg-card/90 shadow-sm backdrop-blur">
          <CardHeader>
            <div className="mb-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-muted-foreground text-sm">✦</span>
              Starter narrative
            </div>
            <CardTitle className="text-3xl">About</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5">
            <p className="text-muted-foreground leading-7">
              This is a mock page used to verify route transitions and
              server/client rendering boundaries without introducing production
              content yet.
            </p>

            <ul className="space-y-3 text-sm">
              {aboutBullets.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary inline-flex size-6 items-center justify-center rounded-full">
                    <span>◈</span>
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border/80 bg-card/80 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Go next</CardTitle>
          </CardHeader>
          <CardContent>
            <MockRouteLinks currentPath="/about" />
            <Link
              href="/features"
              className="border-border hover:bg-accent/40 text-foreground mt-4 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium"
            >
              Explore features mock
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
