import { KuzenboProvider } from "@kuzenbo/core/provider";
import { ThemeBootstrapScript, ThemeProvider } from "@kuzenbo/theme";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ViewTransition } from "react";

import { getSiteUrl } from "@/config/env";
import { bodyFontClass } from "@/config/fonts";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/metadata";

import { Footer } from "./_components/layout/footer";
import { Header } from "./_components/layout/header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: getSiteUrl(),
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFontClass}`}>
        <ThemeBootstrapScript />
        <ThemeProvider>
          <KuzenboProvider>
            <Header />
            <ViewTransition>
              <main className="min-h-screen">{children}</main>
            </ViewTransition>
            <Footer />
          </KuzenboProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
