import { JsonLd } from "@/components/json-ld";
import {
  PAGE_DESCRIPTIONS,
  PAGE_TITLES,
  ROUTE_PATHS,
  SITE_NAME,
} from "@/constants/metadata";
import { buildBreadcrumbJsonLd, buildWebPageJsonLd } from "@/json-ld/schema";
import { buildRouteMetadata } from "@/utils/metadata/route";

import { ProductsContent } from "./_components/page/products-content";

const pagePath = ROUTE_PATHS.products;
const pageTitle = `${PAGE_TITLES.products} | ${SITE_NAME}`;
const pageDescription = PAGE_DESCRIPTIONS.products;

export const metadata = buildRouteMetadata({
  pageTitle,
  pageDescription,
  pagePath,
});

export default function Products() {
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
            { name: PAGE_TITLES.products, path: pagePath },
          ],
        })}
      />
      <ProductsContent />
    </>
  );
}
