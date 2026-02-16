import { describe, expect, test } from "bun:test";

import { ROUTE_PATHS } from "@/constants/metadata";
import { buildRouteMetadata } from "@/utils/metadata/route";

describe("buildRouteMetadata", () => {
  test("builds canonical, Open Graph, and Twitter metadata", () => {
    const pageTitle = "About | Next Start";
    const pageDescription = "About page";

    const metadata = buildRouteMetadata({
      pageTitle,
      pageDescription,
      pagePath: ROUTE_PATHS.about,
    });

    expect(metadata).toMatchObject({
      title: pageTitle,
      description: pageDescription,
      alternates: {
        canonical: "https://example.com/about",
      },
      openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "https://example.com/about",
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
