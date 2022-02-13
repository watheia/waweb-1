import { DivProps } from '@waweb/model';
import Head from 'next/head';
import {
  QueryListenerOptions,
  renderMetaTags,
  useQuerySubscription,
} from 'react-datocms';
import BlogLayout from './components/blog-layout';
import Container from './components/container';
import Header from './components/header';
import MoreStories from './components/more-stories';
import PostBody from './components/post-body';
import PostHeader from './components/post-header';
import SectionSeparator from './components/section-separator';

export interface BlogPostProps extends DivProps {
  subscription: QueryListenerOptions<any, Record<string, any>>;
  preview: boolean;
}
export default function BlogPost({ subscription, preview }: BlogPostProps) {
  const {
    data: { site, post, morePosts },
  } = useQuerySubscription(subscription);

  const metaTags = post.seo.concat(site.favicon);

  return (
    <BlogLayout preview={preview}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Container>
        <Header />
        <article>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
          />
          <PostBody content={post.content} />
        </article>
        <SectionSeparator />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </BlogLayout>
  );
}
