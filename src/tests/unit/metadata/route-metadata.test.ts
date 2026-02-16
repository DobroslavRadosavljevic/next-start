import { describe, expect, test } from "bun:test";

import { buildRouteMetadata } from "@/utils/metadata/route";

describe("buildRouteMetadata", () => {
  test("builds canonical, Open Graph, and Twitter metadata", () => {
    const pageTitle = "Home | Next Start";
    const pageDescription = "Home page";

    const metadata = buildRouteMetadata({
      pageTitle,
      pageDescription,
      pagePath: "/",
    });

    expect(metadata).toMatchObject({
      title: pageTitle,
      description: pageDescription,
      alternates: {
        canonical: "https://example.com/",
      },
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "https://example.com/",
        siteName: "Next Start",
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
      },
    });
  });
});
