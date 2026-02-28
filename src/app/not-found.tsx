import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-background text-foreground flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-2xl font-semibold">Not Found</h1>
        <p className="text-muted-foreground max-w-md">
          Could not find the requested resource.
        </p>
        <Link
          href="/"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 py-3 text-sm font-medium transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
