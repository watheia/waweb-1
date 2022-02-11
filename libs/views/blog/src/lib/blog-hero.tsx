/**
 * Copyright 2022 Watheia Labs, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Category, DivProps } from '@waweb/model';
import { Fragment } from 'react';
import Link from 'next/link';
import { LogoAlt } from '@waweb/atoms';
import BlogHeader from './blog-header';

export interface BlogHeroProps extends DivProps {
  categories: Category[];
}

const BlogHero = ({
  className = 'relative pt-6 pb-16 sm:pb-24 lg:pb-32',
  categories,
  ...props
}: BlogHeroProps) => (
  <div className={className} {...props}>
    <Popover>
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex flex-1 items-center">
          <div className="flex w-full items-center justify-between md:w-auto">
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-700 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="hidden md:block md:space-x-10">
            {categories.map((item) => (
              <Link href={`/blog/post/${item.slug}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  key={item.slug}
                  className="font-medium text-gray-400 hover:text-gray-200"
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden text-right md:block">
          <Link href={`/auth`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="inline-flex items-center px-4 py-2 text-base font-medium text-gray-400 hover:text-gray-200">
              Log in
            </a>
          </Link>
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
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <LogoAlt />
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {categories.map((item) => (
                <Link href={`/blog/post/${item.slug}`}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    key={item.slug}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <Link href="/auth">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-teal-600 hover:bg-gray-100">
                Log in
              </a>
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>

    <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
          <BlogHeader />
          <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua ad ad non deserunt sunt.
          </p>
          <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
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
                className="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:flex-1"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 w-full rounded-md border border-transparent bg-teal-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
              >
                Notify me
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-500">
              We care about the protection of your data. Read our{' '}
              <Link href="/terms-and-conditions">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="font-medium text-gray-300 underline">
                  Privacy Policy
                </a>
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
          <svg
            className="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
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
              className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              <span className="sr-only">Watch our video to learn more</span>
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
              <div
                className="absolute inset-0 flex h-full w-full items-center justify-center"
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

export default BlogHero;
