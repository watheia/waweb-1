import { DivProps, Post } from '@waweb/model';
import Link from 'next/link';
import { storageUrl } from '@waweb/supabase';

const defaultAvatar = storageUrl('avatars', 'supabot.png');

export interface BlogSectionProps extends DivProps {
  posts: Post[];
}

const BlogSection = ({ posts, ...props }: BlogSectionProps) => (
  <section className="relative py-16 bg-gray-50 sm:py-24 lg:py-32" {...props}>
    <div className="relative">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider uppercase text-cyan-600">
          Learn
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Helpful Resources
        </p>
        <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
      </div>
      <div className="grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg"
          >
            <div className="flex-shrink-0">
              <img
                className="object-cover w-full h-48"
                src={post.image_url}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex-1">
                <p className="text-sm font-medium text-cyan-600">
                  <Link href={`/blog/category/${post.category.slug}`}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="hover:underline">{post.category.name}</a>
                  </Link>
                </p>
                <Link href={post.slug}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
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
                  <Link href={`/user/${post.author.slug}`}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                      <img
                        className="w-10 h-10 rounded-full"
                        src={post.author.avatar_url ?? defaultAvatar}
                        alt={post.author.username ?? 'Guest'}
                      />
                    </a>
                  </Link>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <Link href={`/user/${post.author.slug}`}>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a className="hover:underline">{post.author.username}</a>
                    </Link>
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
  </section>
);

export default BlogSection;
