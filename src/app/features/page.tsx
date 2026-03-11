import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

import { MockRouteLinks } from "@/app/_components/page/mock-route-links";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const featureRows = [
  "Opinionated app shell with App Router boundaries.",
  "Built-in observability and API contract checks.",
  "Base UI + Tailwind design system with token-based classes.",
] as const;

export default function FeaturesPage() {
  return (
    <main className="relative isolate overflow-hidden px-6 pb-14 pt-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <Card className="border-border/80 bg-card/90 shadow-sm backdrop-blur">
          <CardHeader>
            <div className="mb-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
              Product surface
            </div>
            <CardTitle className="text-3xl">Features</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-7">
              Another route to exercise transitions between static pages and verify
              that layout boundaries remain stable.
            </p>

            <div className="grid gap-2 sm:grid-cols-3">
              {featureRows.map((feature) => (
                <div
                  key={feature}
                  className="border-border bg-muted/60 rounded-lg border p-3"
                >
                  <div className="mb-2 text-muted-foreground inline-flex items-center gap-2">
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/80 bg-card/80 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Continue routing check</CardTitle>
          </CardHeader>
          <CardContent>
            <MockRouteLinks currentPath="/features" />
            <Link
              href="/contact"
              className="border-border hover:bg-accent/40 text-foreground mt-4 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium"
            >
              Reach the contact mock
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
