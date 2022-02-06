/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Layout from './layout';
import Link from 'next/link';

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Engineering', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2022',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'DevOps', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2022',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2022',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

const navigation = [
  { name: 'Engineeering', href: '#' },
  { name: 'Design', href: '#' },
  { name: 'DevOps', href: '#' },
  { name: 'Case Studies', href: '#' },
];

const Header = () => (
  <h1>
    <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
      Coming soon
    </span>
    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
      <span className="block text-gray-200">Data to enrich your</span>
      <span className="block text-teal-600">online business</span>
    </span>
  </h1>
);

const Hero = () => (
  <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
    <Popover>
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="hidden md:block md:space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-400 hover:text-gray-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:block text-right">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-base font-medium text-gray-400 hover:text-gray-200"
          >
            Log in
          </a>
        </div>
      </nav>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Link href="/">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="block w-full px-5 py-3 text-center font-medium text-teal-600 bg-gray-50 hover:bg-gray-100">
                Log in
              </a>
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>

    <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <Header />
          <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua ad ad non deserunt sunt.
          </p>
          <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <p className="text-base font-medium text-gray-200">
              Sign up to get notifications.
            </p>
            <form action="#" method="POST" className="mt-3 sm:flex">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:flex-1 border-gray-300"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-800 shadow-sm hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
              >
                Notify me
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-500">
              We care about the protection of your data. Read our{' '}
              <a href="#" className="font-medium text-gray-300 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <svg
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
            width={640}
            height={784}
            fill="none"
            viewBox="0 0 640 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                x={118}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-700"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              y={72}
              width={640}
              height={640}
              className="text-gray-900"
              fill="currentColor"
            />
            <rect
              x={118}
              width={404}
              height={784}
              fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
            />
          </svg>
          <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <button
              type="button"
              className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              <span className="sr-only">Watch our video to learn more</span>
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
              <div
                className="absolute inset-0 w-full h-full flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  className="h-20 w-20 text-teal-500"
                  fill="currentColor"
                  viewBox="0 0 84 84"
                >
                  <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                  <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeaturedPosts = () => (
  <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div className="absolute inset-0">
      <div className="h-1/3 sm:h-2/3" />
    </div>
    <div className="relative max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-200 sm:text-4xl">
          Featured posts
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {posts.map((post) => (
          <div
            key={post.title}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={post.imageUrl}
                alt=""
              />
            </div>
            <div className="flex-1 bg-gray-900 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-teal-600">
                  <a href={post.category.href} className="hover:underline">
                    {post.category.name}
                  </a>
                </p>
                <a href={post.href} className="block mt-2">
                  <p className="text-xl font-semibold text-gray-200">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href={post.author.href}>
                    <span className="sr-only">{post.author.name}</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={post.author.imageUrl}
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-200">
                    <a href={post.author.href} className="hover:underline">
                      {post.author.name}
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
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

export default function Blog() {
  return (
    <Layout usePadding useBackdrop>
      <Hero />
      <FeaturedPosts />
    </Layout>
  );
}
