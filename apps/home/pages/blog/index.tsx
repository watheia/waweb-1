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
import { getAllPostsForBlog } from '@waweb/datocms';
import Layout from '@waweb/layout';
import { BlogView } from '@waweb/views.blog';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';

type Props = InferGetServerSidePropsType<typeof getStaticProps>;

export default function BlogPage({ subscription, preview }: Props) {
  const meta = {
    title: 'Watheia Blog',
    description: 'Musings on technology, design, business and more.'
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <BlogView subscription={subscription} preview={preview} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  return {
    props: {
      subscription: preview
        ? {
            preview: true,
            initialData: await getAllPostsForBlog(preview),
            token: process.env['DATO_API_TOKEN'],
            environment: process.env['NEXT_DATOCMS_ENVIRONMENT'] || 'main'
          }
        : {
            enabled: false,
            initialData: await getAllPostsForBlog(preview)
          }
    }
  };
};
