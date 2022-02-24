import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import CloudIllustration from './cloud-illustration';

const HeroSection = () => (
  <section className="pt-10 bg-gray-900 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
          <div className="lg:py-24">
            <Link href="/blog/posts/we-build-micro-frontends">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="inline-flex items-center p-1 pr-2 text-white bg-black rounded-full hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
                <span className="rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-3 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide text-white">
                  We build micro frontends!
                </span>
                <span className="ml-4 text-sm">Read our case study.</span>
                <ChevronRightIcon
                  className="w-5 h-5 ml-2 text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </Link>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block">A better way to</span>
              <span className="block pb-3 text-transparent bg-gradient-to-r from-teal-200 to-teal-400 bg-clip-text sm:pb-5">
                ship web apps
              </span>
            </h1>
            <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
              Let your components drive web application delivery at global
              scale. Enjoy world-class performance, security and support every
              step of the way.
            </p>
            <div className="mt-10 sm:mt-12">
              <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                <div className="sm:flex">
                  <div className="flex-1 min-w-0">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full px-4 py-3 font-medium text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                      Receive updates
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                  Your privacy is important to us, read our{' '}
                  <Link href="/terms-and-conditions">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="font-medium text-white">terms of service</a>
                  </Link>{' '}
                  for more information. .
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
          <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <CloudIllustration />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
