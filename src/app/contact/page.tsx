import {
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

import { MockRouteLinks } from "@/app/_components/page/mock-route-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main className="relative isolate overflow-hidden px-6 pb-14 pt-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <Card className="border-border/80 bg-card/90 shadow-sm backdrop-blur">
          <CardHeader>
            <div className="mb-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
              Contact sandbox
            </div>
            <CardTitle className="text-3xl">Contact</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-7">
              This mock page includes a placeholder form block to simulate a
              simple page that still respects the app shell, tokens, and theme.
            </p>

            <Card className="border-border/60 bg-background rounded-xl">
              <CardContent className="space-y-3 p-4">
                <p className="text-sm text-muted-foreground">
                  Form integration placeholder:
                </p>
                <p className="text-foreground">
                  hello@starter.local
                </p>
                <button
                  type="button"
                  className="border-border hover:bg-accent/40 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium"
                >
                  Send test request
                </button>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card className="border-border/80 bg-card/80 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Finish route tour</CardTitle>
          </CardHeader>
          <CardContent>
            <MockRouteLinks currentPath="/contact" />
            <Link
              href="/about"
              className="border-border hover:bg-accent/40 text-foreground mt-4 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium"
            >
              Back to about
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
