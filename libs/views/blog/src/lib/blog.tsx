import { useMessage } from '@waweb/message';
import { DivProps } from '@waweb/model';
import Head from 'next/head';
import {
  QueryListenerOptions,
  renderMetaTags,
  useQuerySubscription,
} from 'react-datocms';
import BlogLayout from './components/blog-layout';
import Container from './components/container';
import HeroPost from './components/hero-post';
import Intro from './components/intro';
import MoreStories from './components/more-stories';

// export type BlogProps = DivProps & AllPostsResponse & { preview: boolean };

export interface BlogProps extends DivProps {
  subscription: QueryListenerOptions<any, Record<string, any>>;
  preview: boolean;
}

export default function Blog({ subscription, preview, ...props }: BlogProps) {
  const { data, error } = useQuerySubscription(subscription);
  const { handleMessage } = useMessage();

  if (error) {
    handleMessage({ type: 'error', message: error.message });
  }

  const heroPost = data?.allPosts[0];
  const morePosts = data?.allPosts.slice(1) ?? [];
  const metaTags = data?.blog.seo;
  return (
    <BlogLayout preview={preview}>
      {metaTags && <Head>{renderMetaTags(metaTags)}</Head>}
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </BlogLayout>
  );
}
