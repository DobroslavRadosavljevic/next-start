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
    <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-900">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="max-w-md text-slate-600">
          An unexpected error occurred. Please try again.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleRetry}
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            Try again
          </button>
          <button
            type="button"
            onClick={handleGoHome}
            className="rounded-full border border-gray-200 px-5 py-3 text-sm font-medium transition-colors hover:bg-slate-100"
          >
            Go to homepage
          </button>
        </div>
      </div>
    </div>
  );
}
