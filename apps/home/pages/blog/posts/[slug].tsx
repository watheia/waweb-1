import { Page, PageSpinner } from '@waweb/atoms';
import { getAllPostsWithSlug, getPostAndMore } from '@waweb/datocms';
import Layout from '@waweb/layout';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
} from 'next';
import { lazy, Suspense } from 'react';

const BlogPostView = lazy(() =>
  import('@waweb/views.blog').then(({ BlogPostView }) => ({
    default: BlogPostView,
  }))
);

type Props = InferGetServerSidePropsType<typeof getStaticProps>;

export default function BlogPostPage({ subscription, preview }: Props) {
  const meta = {
    title: 'Watheia Blog',
    description: 'Musings on technology, design, business and more.',
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <Suspense fallback={PageSpinner}>
          <BlogPostView subscription={subscription} preview={!!preview} />
        </Suspense>
      </Layout>
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts.map(({ slug }) => `/blog/posts/${slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const { slug } = params;
  return {
    props: {
      subscription: preview
        ? {
            preview: true,
            variables: { slug },
            initialData: await getPostAndMore(slug as string, !!preview),
            token: process.env.NEXT_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await getPostAndMore(slug as string, !!preview),
          },
    },
  };
};
