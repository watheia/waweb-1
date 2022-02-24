import { metaTagsFragment, responsiveImageFragment } from './fragments';
import { request } from './request';

export default async function getAllPostsForBlog(preview: boolean, first = 20) {
  const data = await request(
    `
  {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    blog {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
    allPosts(orderBy: date_DESC, first: ${first}) {
      title
      slug
      excerpt
      date
      category {
        name
        slug
      }
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
            ...responsiveImageFragment
          }
        }
      }
    }
  }

  ${metaTagsFragment}
  ${responsiveImageFragment}
  `,
    { preview }
  );

  return data;
}
