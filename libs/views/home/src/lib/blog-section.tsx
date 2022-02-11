import { DivProps, Post } from '@waweb/model';
import Link from 'next/link';
import { storageUrl } from '@waweb/supabase';

const defaultAvatar = storageUrl('avatars', 'supabot.png');

export interface BlogSectionProps extends DivProps {
  posts: Post[];
}

const BlogSection = ({ posts, ...props }: BlogSectionProps) => (
  <section className="relative bg-gray-50 py-16 sm:py-24 lg:py-32" {...props}>
    <div className="relative">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-cyan-600">
          Learn
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Helpful Resources
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg"
          >
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={post.image_url}
                alt=""
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-cyan-600">
                  <Link href={`/blog/category/${post.category.slug}`}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="hover:underline">{post.category.name}</a>
                  </Link>
                </p>
                <Link href={post.slug}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </Link>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <Link href={`/user/${post.author.slug}`}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                      <img
                        className="h-10 w-10 rounded-full"
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
