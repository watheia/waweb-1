import { DivProps, PostSummary } from '@waweb/model';
import { CoverImage, Date } from '@waweb/views.blog';
import Link from 'next/link';
import { Image } from 'react-datocms';

export interface BlogSectionProps extends DivProps {
  posts: PostSummary[];
}

const BlogSection = ({ posts, ...props }: BlogSectionProps) => (
  <section className="relative py-16 bg-gray-50 sm:py-24 lg:py-32" {...props}>
    <div className="relative">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold tracking-wider text-teal-600 uppercase">
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
      <div className="grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg"
          >
            <div className="flex-shrink-0">
              <CoverImage
                slug={post.slug}
                title={post.title}
                responsiveImage={post.coverImage.responsiveImage}
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
              <div className="flex-1">
                <p className="text-sm font-medium text-teal-600">
                  <Link href={`/blog/category/${post.category.slug}`}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="hover:underline">{post.category.name}</a>
                  </Link>
                </p>
                <Link href={`/blog/posts/${post.slug}`}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                  </a>
                </Link>
              </div>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <Image
                    data={post.author.picture.responsiveImage}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <Link href={`/user/${post.author.name}`}>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a className="hover:underline">{post.author.name}</a>
                    </Link>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <Date dateString={post.date} />
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
