import Link from 'next/link';

/* This example requires Tailwind CSS v2.0+ */
export default function ComingSoon() {
  return (
    <div className="flex min-h-full flex-col pt-16 pb-12">
      <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
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
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">
              Placeholder
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl">
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
      </div>
      <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
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
    </div>
  );
}
