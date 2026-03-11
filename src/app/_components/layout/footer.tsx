import Link from "next/link";

export const Footer = () => (
  <footer className="border-t border-gray-200 py-12">
    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6">
      <div>
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-slate-900"
        >
          Next Start
        </Link>
        <p className="mt-2 text-sm text-slate-600">© 2026 Next Start</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-slate-900">Connect</h3>
        <p className="mt-2 text-sm text-slate-600">Follow us for updates.</p>
      </div>
    </div>
  </footer>
);
