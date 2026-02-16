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
      <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        {SITE_DESCRIPTION}
      </p>
      <div className="max-w-md rounded-xl border border-zinc-300/70 bg-zinc-100/70 px-4 py-3 text-left text-sm dark:border-zinc-700 dark:bg-zinc-900/60">
        <p className="font-medium text-foreground">Eden Example</p>
        <p className="mt-1 text-zinc-700 dark:text-zinc-300">
          GET <code>/api</code>: <code>{helloResponse.data}</code>
        </p>
        <p className="mt-1 text-zinc-700 dark:text-zinc-300">
          POST <code>/api</code> with <code>{'{ name: "Eden" }'}</code>:{" "}
          <code>{mirrorResponse.data?.name ?? "No response"}</code>
        </p>
      </div>
      <Link
        href="https://nextjs.org/docs"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-zinc-500 underline hover:text-foreground"
      >
        Next.js docs
      </Link>
      <Link
        href="/api/openapi"
        className="text-sm text-zinc-500 underline hover:text-foreground"
      >
        OpenAPI docs
      </Link>
    </div>
  );
};
