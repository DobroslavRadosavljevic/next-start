import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background text-foreground flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-2xl font-semibold">Not Found</h1>
        <p className="max-w-md text-zinc-600 dark:text-zinc-400">
          Could not find the requested resource.
        </p>
        <Link
          href="/"
          className="bg-foreground text-background rounded-full px-5 py-3 text-sm font-medium transition-colors hover:opacity-90"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
