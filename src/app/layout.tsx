import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransition } from "react";

import { JsonLd } from "@/components/json-ld";
import { env } from "@/config/env";
import { bodyFontClass } from "@/config/fonts";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/metadata";
import { buildSiteJsonLd } from "@/json-ld/schema";

import { Footer } from "./_components/layout/footer";
import { Header } from "./_components/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: env.NEXT_PUBLIC_SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFontClass} antialiased bg-background text-foreground`}
      >
        <JsonLd data={buildSiteJsonLd()} />
        <Header />
        <ViewTransition>
          <main className="min-h-screen">{children}</main>
        </ViewTransition>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
