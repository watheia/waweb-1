import Link from 'next/link';
import Layout from './layout';

/* This example requires Tailwind CSS v2.0+ */
export default function ComingSoon() {
  return (
    <Layout className="min-h-full pt-16 pb-12 flex flex-col">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <a href="/" className="inline-flex">
            <span className="sr-only">Workflow</span>
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=teal&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">
              Placeholder
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-200 tracking-tight sm:text-5xl">
              Please stand by.
            </h1>
            <p className="mt-2 text-base text-gray-400">
              We are still working on this page.
            </p>
            <div className="mt-6">
              <Link href="/home">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="text-base font-medium text-teal-600 hover:text-teal-500">
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <Link href="/support">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Contact Support
            </a>
          </Link>
          <span
            className="inline-block border-l border-gray-300"
            aria-hidden="true"
          />
          <Link href="/channel/announcements">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Status
            </a>
          </Link>
          <span
            className="inline-block border-l border-gray-300"
            aria-hidden="true"
          />
          <Link href="/channel/public">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Community Chat
            </a>
          </Link>
        </nav>
      </footer>
    </Layout>
  );
}
