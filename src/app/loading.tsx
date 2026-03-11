export default function Loading() {
  return (
    <div className="bg-background text-foreground mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6">
      <div className="flex flex-col gap-4">
        <div className="bg-muted h-8 w-48 animate-pulse rounded" />
        <div className="bg-muted h-4 w-64 animate-pulse rounded" />
        <div className="bg-muted h-4 w-56 animate-pulse rounded" />
      </div>
    </div>
  );
}
