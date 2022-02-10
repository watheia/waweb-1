import { DivProps, Post } from '@waweb/model';
import { storageUrl } from '@waweb/supabase';
import Link from 'next/link';

export interface BlogFeaturedProps extends DivProps {
  posts: Post[];
}

export const BlogFeatured = ({
  className = 'relative px-4 pt-16 pb-20 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8',
  posts,
  ...props
}: BlogFeaturedProps) => {
  const defaultAvatar = storageUrl('avatars', 'supabot.png');
  return (
    <div className={className} {...props}>
      <div className="absolute inset-0">
        <div className="h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl">
            Featured posts
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-400 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="object-cover w-full h-48"
                  src={post.image_url}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-gray-900">
                <div className="flex-1">
                  <p className="text-sm font-medium text-teal-600">
                    <Link href={`/blog/category/${post.category.slug}`}>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a className="hover:underline">{post.category.name}</a>
                    </Link>
                  </p>
                  <Link href={`/blog/post/${post.slug}`}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="block mt-2">
                      <p className="text-xl font-semibold text-gray-200">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.description}
                      </p>
                    </a>
                  </Link>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href={`/user/${post.author.slug}`}>
                      <span className="sr-only">{post.author.username}</span>
                      <img
                        className="w-10 h-10 rounded-full"
                        src={post.author.avatar_url ?? defaultAvatar}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-200">
                      <a
                        href={`/user/${post.author.slug}`}
                        className="hover:underline"
                      >
                        {post.author.username}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.reading_time} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFeatured;
