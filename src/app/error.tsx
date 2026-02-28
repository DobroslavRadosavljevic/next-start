"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service (e.g. Sentry)
    console.error(error);
  }, [error]);

  const handleRetry = useCallback(() => {
    router.refresh();
  }, [router]);

  const handleGoHome = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="bg-background text-foreground flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="max-w-md text-zinc-600 dark:text-zinc-400">
          An unexpected error occurred. Please try again.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleRetry}
            className="bg-foreground text-background rounded-full px-5 py-3 text-sm font-medium transition-colors hover:opacity-90"
          >
            Try again
          </button>
          <button
            type="button"
            onClick={handleGoHome}
            className="border-foreground hover:bg-foreground/10 rounded-full border px-5 py-3 text-sm font-medium transition-colors"
          >
            Go to homepage
          </button>
        </div>
      </div>
    </div>
  );
}
