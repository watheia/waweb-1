import { Maybe, Page, Site } from '@waweb/model';
import { metaTagsFragment } from './fragments';
import { request } from './request';

export type PageData = { page: Page; site: Site };

export default async function getPageByPath(
  path: string,
  preview = false
): Promise<Maybe<PageData>> {
  const result = await request<{ data: Maybe<PageData> }>(
    `
  query PageByPath($path: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    page(filter: {path: {eq: $path}}) {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      name
      path
      content {
        value
      }
    }
  }

  ${metaTagsFragment}
  `,
    {
      preview,
      variables: {
        path,
      },
    }
  );
  return result?.data;
}
