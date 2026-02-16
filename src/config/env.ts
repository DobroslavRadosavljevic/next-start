import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets-zod";

export const env = createEnv({
  extends: [vercel()],
  experimental__runtimeEnv: {},
});

/**
 * Site URL from Vercel system vars (VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL)
 * or http://localhost:3000 in dev. Server-only.
 * @see https://vercel.com/docs/environment-variables/system-environment-variables
 */
export const getSiteUrl = (): string => {
  const domain =
    env.VERCEL_PROJECT_PRODUCTION_URL ?? env.VERCEL_URL ?? "localhost:3000";
  const protocol = domain.startsWith("localhost") ? "http" : "https";
  return `${protocol}://${domain}`;
};
