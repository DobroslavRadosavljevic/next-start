import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-900">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-2xl font-semibold">Not Found</h1>
        <p className="max-w-md text-slate-600">
          Could not find the requested resource.
        </p>
        <Link
          href="/"
          className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
