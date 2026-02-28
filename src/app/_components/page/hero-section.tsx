import Link from "next/link";

import { eden } from "@/api/eden";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/metadata";

export const HeroSection = async () => {
  const [helloResponse, mirrorResponse] = await Promise.all([
    eden.get(),
    eden.post({
      name: "Eden",
    }),
  ]);

  return (
    <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center gap-8 px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">{SITE_NAME}</h1>
      <p className="text-muted-foreground max-w-md text-lg">
        {SITE_DESCRIPTION}
      </p>
      <div className="bg-card text-card-foreground border-border max-w-md rounded-xl border px-4 py-3 text-left text-sm">
        <p className="text-foreground font-medium">Eden Example</p>
        <p className="text-muted-foreground mt-1">
          GET <code>/api</code>: <code>{helloResponse.data}</code>
        </p>
        <p className="text-muted-foreground mt-1">
          POST <code>/api</code> with <code>{'{ name: "Eden" }'}</code>:{" "}
          <code>{mirrorResponse.data?.name ?? "No response"}</code>
        </p>
      </div>
      <Link
        href="https://nextjs.org/docs"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground text-sm underline"
      >
        Next.js docs
      </Link>
      <Link
        href="/api/openapi"
        className="text-muted-foreground hover:text-foreground text-sm underline"
      >
        OpenAPI docs
      </Link>
    </div>
  );
};
