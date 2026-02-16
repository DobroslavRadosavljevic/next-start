export const ContactContent = () => (
  <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-2xl flex-col justify-center px-6 py-14">
    <div className="space-y-6">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Reach out to request onboarding support, report issues, or ask a
          product question.
        </p>
      </div>

      <div className="space-y-4 rounded-2xl border border-zinc-200 bg-background p-6 text-left dark:border-zinc-800">
        <div className="space-y-2">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
            Email
          </p>
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            hello@yourdomain.com
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
            Response time
          </p>
          <p className="text-lg text-zinc-900 dark:text-zinc-100">
            Usually within 1 business day
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
            Preferred contact
          </p>
          <p className="text-base text-zinc-900 dark:text-zinc-100">
            For now, contact is informational only. Use email for all requests.
          </p>
        </div>
      </div>
    </div>
  </div>
);
