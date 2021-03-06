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
import config from '@waweb/config';
import { getTopPosts } from '@waweb/datocms';
import Layout from '@waweb/layout';
import Home from '@waweb/views.home';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function HomePage({ posts }: Props) {
  const meta = {
    title: 'Watheia Labs | A capabilities test of the modern web',
    description: config.metaDescription
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout useBackdrop>
        <Home posts={posts} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  return {
    props: {
      posts: await getTopPosts(preview, 3)
    }
  };
};
