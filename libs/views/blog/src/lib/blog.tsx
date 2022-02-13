import { DivProps } from '@waweb/model';
import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';
import BlogLayout from './components/blog-layout';
import Container from './components/container';
import HeroPost from './components/hero-post';
import Intro from './components/intro';
import MoreStories from './components/more-stories';
import { AllPostsResponse } from './types';

export type BlogProps = DivProps & AllPostsResponse & { preview: boolean };

export default function Blog({ data, preview, ...props }: BlogProps) {
  const heroPost = data?.allPosts?.at(0);
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
