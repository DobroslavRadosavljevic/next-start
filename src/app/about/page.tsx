import { JsonLd } from "@/components/json-ld";
import {
  PAGE_DESCRIPTIONS,
  PAGE_TITLES,
  ROUTE_PATHS,
  SITE_NAME,
} from "@/constants/metadata";
import { buildBreadcrumbJsonLd, buildWebPageJsonLd } from "@/json-ld/schema";
import { buildRouteMetadata } from "@/utils/metadata/route";

import { AboutContent } from "./_components/page/about-content";

const pagePath = ROUTE_PATHS.about;
const pageTitle = `${PAGE_TITLES.about} | ${SITE_NAME}`;
const pageDescription = PAGE_DESCRIPTIONS.about;

export const metadata = buildRouteMetadata({
  pageTitle,
  pageDescription,
  pagePath,
});

export default function About() {
  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          pageTitle,
          pageDescription,
          pagePath,
        })}
      />
      <JsonLd
        data={buildBreadcrumbJsonLd({
          items: [
            { name: SITE_NAME, path: ROUTE_PATHS.home },
            { name: PAGE_TITLES.about, path: pagePath },
          ],
        })}
      />
      <AboutContent />
    </>
  );
}
