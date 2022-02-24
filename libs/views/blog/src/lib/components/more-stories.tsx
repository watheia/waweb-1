import { ResponsiveImageType } from 'react-datocms';
import PostPreview from './post-preview';

export interface MoreStoriesProps {
  posts: {
    slug: string;
    title: string;
    coverImage: { responsiveImage: ResponsiveImageType };
    date: string;
    excerpt: string;
    author: { name: string; picture: { responsiveImage: ResponsiveImageType } };
  }[];
}

export default function MoreStories(props: MoreStoriesProps) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter text-gray-400 md:text-7xl">
        More Stories
      </h2>
      <div className="grid grid-cols-1 mb-32 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {props.posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
