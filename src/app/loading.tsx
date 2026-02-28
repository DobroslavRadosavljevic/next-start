export default function Loading() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-4">
        <div className="h-8 w-48 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-4 w-64 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-4 w-56 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
    </div>
  );
}
