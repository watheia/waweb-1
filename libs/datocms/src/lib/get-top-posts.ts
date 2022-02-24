import { responsiveImageFragment } from './fragments';
import { request } from './request';
import { PostSummary } from '@waweb/model';

export default async function getTopPosts(
  preview: boolean,
  first = 3
): Promise<PostSummary[]> {
  const data = await request<{ allPosts?: PostSummary[] }>(
    `
  {
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

  ${responsiveImageFragment}
  `,
    { preview }
  );

  return data.allPosts ?? [];
}
