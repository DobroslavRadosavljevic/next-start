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
      <p className="max-w-md text-lg text-slate-600">{SITE_DESCRIPTION}</p>
      <div className="max-w-md rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-sm text-slate-900">
        <p className="font-medium text-slate-900">Eden Example</p>
        <p className="mt-1 text-slate-600">
          GET <code>/api</code>: <code>{helloResponse.data}</code>
        </p>
        <p className="mt-1 text-slate-600">
          POST <code>/api</code> with <code>{'{ name: "Eden" }'}</code>:{" "}
          <code>{mirrorResponse.data?.name ?? "No response"}</code>
        </p>
      </div>
      <Link
        href="https://nextjs.org/docs"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-slate-600 underline hover:text-slate-900"
      >
        Next.js docs
      </Link>
      <Link
        href="/api/openapi"
        className="text-sm text-slate-600 underline hover:text-slate-900"
      >
        OpenAPI docs
      </Link>
    </div>
  );
};
