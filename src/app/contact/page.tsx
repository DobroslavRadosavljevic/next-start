import { JsonLd } from "@/components/json-ld";
import {
  PAGE_DESCRIPTIONS,
  PAGE_TITLES,
  ROUTE_PATHS,
  SITE_NAME,
} from "@/constants/metadata";
import { buildBreadcrumbJsonLd, buildWebPageJsonLd } from "@/json-ld/schema";
import { buildRouteMetadata } from "@/utils/metadata/route";

import { ContactContent } from "./_components/page/contact-content";

const pagePath = ROUTE_PATHS.contact;
const pageTitle = `${PAGE_TITLES.contact} | ${SITE_NAME}`;
const pageDescription = PAGE_DESCRIPTIONS.contact;

export const metadata = buildRouteMetadata({
  pageTitle,
  pageDescription,
  pagePath,
});

export default function Contact() {
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
            { name: PAGE_TITLES.contact, path: pagePath },
          ],
        })}
      />
      <ContactContent />
    </>
  );
}
