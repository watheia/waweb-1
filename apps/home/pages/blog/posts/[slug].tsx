import { Page } from '@waweb/atoms';
import { getAllPostsWithSlug, getPostAndMore } from '@waweb/datocms';
import Layout from '@waweb/layout';
import { BlogPostView } from '@waweb/views.blog';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
} from 'next';

type Props = InferGetServerSidePropsType<typeof getStaticProps>;

export default function BlogPostPage({ subscription, preview }: Props) {
  const meta = {
    title: 'Watheia Blog',
    description: 'Musings on technology, design, business and more.',
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <BlogPostView subscription={subscription} preview={!!preview} />
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
