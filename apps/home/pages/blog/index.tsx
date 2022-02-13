/**
 * Copyright 2022 Watheia Labs, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Page } from '@waweb/atoms';
import Layout from '@waweb/layout';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { BlogView, fixtures } from '@waweb/views.blog';

type Props = InferGetServerSidePropsType<typeof getStaticProps>;

// const query = `
//   {
//     site: _site {
//       favicon: faviconMetaTags {
//         ...metaTagsFragment
//       }
//     }
//     blog {
//       seo: _seoMetaTags {
//         ...metaTagsFragment
//       }
//     }
//     allPosts(orderBy: date_DESC, first: 20) {
//       title
//       slug
//       excerpt
//       date
//       coverImage {
//         responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
//           ...responsiveImageFragment
//         }
//       }
//       author {
//         name
//         picture {
//           responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
//             ...responsiveImageFragment
//           }
//         }
//       }
//     }
//   }

//   ${metaTagsFragment}
//   ${responsiveImageFragment}
// `;

export default function BlogPage({ data, preview }: Props) {
  const meta = {
    title: 'Watheia Blog',
    description: 'Musings on technology, design, business and more.',
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <BlogView data={data} preview={preview} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  // const graphqlRequest = {
  //   query,
  //   preview,
  //   variables: {},
  // };

  // return {
  //   props: {
  //     subscription: preview
  //       ? {
  //           ...graphqlRequest,
  //           initialData: await request(graphqlRequest),
  //           token: process.env['NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN'],
  //           environment: process.env['NEXT_DATOCMS_ENVIRONMENT'] || null,
  //         }
  //       : {
  //           enabled: false,
  //           initialData: await request(graphqlRequest),
  //         },
  //   },
  // };

  return {
    props: {
      data: fixtures.allPosts.data,
      preview: false,
    },
  };
};
