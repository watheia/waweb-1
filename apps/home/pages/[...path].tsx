import { Page } from '@waweb/atoms';
import { getAllPagesWithPath, getPageByPath } from '@waweb/datocms';
import Layout from '@waweb/layout';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Image, StructuredText } from 'react-datocms';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function GenericPage({ site, page }: Props) {
  const metaTags = page?.seo.concat(site.favicon);

  return (
    <Page metaTags={metaTags} fullViewport>
      <Layout usePadding>
        <div className="prose prose-lg prose-blue prose-invert">
          {page && page.content && (
            <StructuredText
              data={page.content}
              renderBlock={({ record }: { record: any }) => {
                if (record.__typename === 'ImageBlockRecord') {
                  //  eslint-disable-next-line jsx-a11y/alt-text
                  return <Image data={record.image.responsiveImage} />;
                }

                console.error("Don't know how to render a block!", record);
                return <p>Don&apos;t know how to render a block!</p>;
              }}
            />
          )}
        </div>
      </Layout>
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = await getAllPagesWithPath();
  return {
    paths: allPages.map(({ path }) => path),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const { path } = params;
  const data = await getPageByPath(typeof path === 'string' ? path : path[0]);
  return {
    props: data ? data : { page: null, site: null },
  };
};
