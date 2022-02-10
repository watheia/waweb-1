import { render } from '@testing-library/react';
import Blog from './blog';
import categories from '../fixtures/categories.json';
import posts from '../fixtures/posts.json';
import { Category, Post } from '@waweb/model';

describe('waweb.views.blog', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Blog categories={categories as Category[]} posts={posts as Post[]} />
    );
    expect(container).toBeInstanceOf(HTMLDivElement);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="root"
        >
          <div
            class="relative pt-6 pb-16 sm:pb-24 lg:pb-32"
          >
            <div>
              <nav
                aria-label="Global"
                class="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
              >
                <div
                  class="flex items-center flex-1"
                >
                  <div
                    class="flex items-center justify-between w-full md:w-auto"
                  >
                    <div
                      class="flex items-center -mr-2 md:hidden"
                    >
                      <button
                        aria-expanded="false"
                        class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-700 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                        id="headlessui-popover-button-1"
                        type="button"
                      >
                        <span
                          class="sr-only"
                        >
                          Open main menu
                        </span>
                        <svg
                          aria-hidden="true"
                          class="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 6h16M4 12h16M4 18h16"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    class="hidden md:block md:space-x-10"
                  >
                    <a
                      class="font-medium text-gray-400 hover:text-gray-200"
                      href="/blog/post/engineering"
                    >
                      Engineering
                    </a>
                    <a
                      class="font-medium text-gray-400 hover:text-gray-200"
                      href="/blog/post/design"
                    >
                      Design
                    </a>
                    <a
                      class="font-medium text-gray-400 hover:text-gray-200"
                      href="/blog/post/devops"
                    >
                      DevOps
                    </a>
                    <a
                      class="font-medium text-gray-400 hover:text-gray-200"
                      href="/blog/post/guides"
                    >
                      Guides
                    </a>
                  </div>
                </div>
                <div
                  class="hidden text-right md:block"
                >
                  <a
                    class="inline-flex items-center px-4 py-2 text-base font-medium text-gray-400 hover:text-gray-200"
                    href="/auth"
                  >
                    Log in
                  </a>
                </div>
              </nav>
            </div>
            <div
              class="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6 lg:mt-32"
            >
              <div
                class="lg:grid lg:grid-cols-12 lg:gap-8"
              >
                <div
                  class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
                >
                  <h1>
                    <span
                      class="block text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base"
                    >
                      Coming soon
                    </span>
                    <span
                      class="block mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl"
                    >
                      <span
                        class="block text-gray-200"
                      >
                        Data to enrich your
                      </span>
                      <span
                        class="block text-teal-600"
                      >
                        online business
                      </span>
                    </span>
                  </h1>
                  <p
                    class="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                  >
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                  </p>
                  <div
                    class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
                  >
                    <p
                      class="text-base font-medium text-gray-200"
                    >
                      Sign up to get notifications.
                    </p>
                    <form
                      action="#"
                      class="mt-3 sm:flex"
                      method="POST"
                    >
                      <label
                        class="sr-only"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        class="block w-full py-3 text-base placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:flex-1"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                      />
                      <button
                        class="w-full px-6 py-3 mt-3 text-base font-medium text-white bg-teal-800 border border-transparent rounded-md shadow-sm hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                        type="submit"
                      >
                        Notify me
                      </button>
                    </form>
                    <p
                      class="mt-3 text-sm text-gray-500"
                    >
                      We care about the protection of your data. Read our
                       
                      <a
                        class="font-medium text-gray-300 underline"
                        href="/terms-and-conditions"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div
                  class="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
                >
                  <svg
                    aria-hidden="true"
                    class="absolute top-0 origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:hidden"
                    fill="none"
                    height="784"
                    viewBox="0 0 640 784"
                    width="640"
                  >
                    <defs>
                      <pattern
                        height="20"
                        id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                        patternUnits="userSpaceOnUse"
                        width="20"
                        x="118"
                        y="0"
                      >
                        <rect
                          class="text-gray-700"
                          fill="currentColor"
                          height="4"
                          width="4"
                          x="0"
                          y="0"
                        />
                      </pattern>
                    </defs>
                    <rect
                      class="text-gray-900"
                      fill="currentColor"
                      height="640"
                      width="640"
                      y="72"
                    />
                    <rect
                      fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                      height="784"
                      width="404"
                      x="118"
                    />
                  </svg>
                  <div
                    class="relative w-full mx-auto rounded-lg shadow-lg lg:max-w-md"
                  >
                    <button
                      class="relative block w-full overflow-hidden bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                      type="button"
                    >
                      <span
                        class="sr-only"
                      >
                        Watch our video to learn more
                      </span>
                      <img
                        alt=""
                        class="w-full"
                        src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      />
                      <div
                        aria-hidden="true"
                        class="absolute inset-0 flex items-center justify-center w-full h-full"
                      >
                        <svg
                          class="w-20 h-20 text-teal-500"
                          fill="currentColor"
                          viewBox="0 0 84 84"
                        >
                          <circle
                            cx="42"
                            cy="42"
                            fill="white"
                            opacity="0.9"
                            r="42"
                          />
                          <path
                            d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="relative px-4 pt-16 pb-20 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
          >
            <div
              class="absolute inset-0"
            >
              <div
                class="h-1/3 sm:h-2/3"
              />
            </div>
            <div
              class="relative mx-auto max-w-7xl"
            >
              <div
                class="text-center"
              >
                <h2
                  class="text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl"
                >
                  Featured posts
                </h2>
                <p
                  class="max-w-2xl mx-auto mt-3 text-xl text-gray-400 sm:mt-4"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
                </p>
              </div>
              <div
                class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none"
              >
                <div
                  class="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div
                    class="flex-shrink-0"
                  >
                    <img
                      alt=""
                      class="object-cover w-full h-48"
                      src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    />
                  </div>
                  <div
                    class="flex flex-col justify-between flex-1 p-6 bg-gray-900"
                  >
                    <div
                      class="flex-1"
                    >
                      <p
                        class="text-sm font-medium text-teal-600"
                      >
                        <a
                          class="hover:underline"
                          href="/blog/category/engineering"
                        >
                          Engineering
                        </a>
                      </p>
                      <a
                        class="block mt-2"
                        href="/blog/post/boost-your-conversion-rate"
                      >
                        <p
                          class="text-xl font-semibold text-gray-200"
                        >
                          Boost your conversion rate
                        </p>
                        <p
                          class="mt-3 text-base text-gray-500"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
                        </p>
                      </a>
                    </div>
                    <div
                      class="flex items-center mt-6"
                    >
                      <div
                        class="flex-shrink-0"
                      >
                        <a
                          href="/user/roel-aufderehar"
                        >
                          <span
                            class="sr-only"
                          >
                            Roel Aufderehar
                          </span>
                          <img
                            alt=""
                            class="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          />
                        </a>
                      </div>
                      <div
                        class="ml-3"
                      >
                        <p
                          class="text-sm font-medium text-gray-200"
                        >
                          <a
                            class="hover:underline"
                            href="/user/roel-aufderehar"
                          >
                            Roel Aufderehar
                          </a>
                        </p>
                        <div
                          class="flex space-x-1 text-sm text-gray-500"
                        >
                          <time
                            datetime="2020-03-16"
                          >
                            Mar 16, 2022
                          </time>
                          <span
                            aria-hidden="true"
                          >
                            ·
                          </span>
                          <span>
                            6 min
                             read
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div
                    class="flex-shrink-0"
                  >
                    <img
                      alt=""
                      class="object-cover w-full h-48"
                      src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    />
                  </div>
                  <div
                    class="flex flex-col justify-between flex-1 p-6 bg-gray-900"
                  >
                    <div
                      class="flex-1"
                    >
                      <p
                        class="text-sm font-medium text-teal-600"
                      >
                        <a
                          class="hover:underline"
                          href="/blog/category/dev-ops"
                        >
                          DevOps
                        </a>
                      </p>
                      <a
                        class="block mt-2"
                        href="/blog/post/how-to-use-search-engine-optimization-to-drive-sales"
                      >
                        <p
                          class="text-xl font-semibold text-gray-200"
                        >
                          How to use search engine optimization to drive sales
                        </p>
                        <p
                          class="mt-3 text-base text-gray-500"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.
                        </p>
                      </a>
                    </div>
                    <div
                      class="flex items-center mt-6"
                    >
                      <div
                        class="flex-shrink-0"
                      >
                        <a
                          href="/user/brenna-goyette"
                        >
                          <span
                            class="sr-only"
                          >
                            Brenna Goyette
                          </span>
                          <img
                            alt=""
                            class="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          />
                        </a>
                      </div>
                      <div
                        class="ml-3"
                      >
                        <p
                          class="text-sm font-medium text-gray-200"
                        >
                          <a
                            class="hover:underline"
                            href="/user/brenna-goyette"
                          >
                            Brenna Goyette
                          </a>
                        </p>
                        <div
                          class="flex space-x-1 text-sm text-gray-500"
                        >
                          <time
                            datetime="2020-03-10"
                          >
                            Mar 10, 2022
                          </time>
                          <span
                            aria-hidden="true"
                          >
                            ·
                          </span>
                          <span>
                            4 min
                             read
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div
                    class="flex-shrink-0"
                  >
                    <img
                      alt=""
                      class="object-cover w-full h-48"
                      src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    />
                  </div>
                  <div
                    class="flex flex-col justify-between flex-1 p-6 bg-gray-900"
                  >
                    <div
                      class="flex-1"
                    >
                      <p
                        class="text-sm font-medium text-teal-600"
                      >
                        <a
                          class="hover:underline"
                          href="/blog/category/misc"
                        >
                          Miscellaneous
                        </a>
                      </p>
                      <a
                        class="block mt-2"
                        href="/blog/post/improve-your-customer-experience"
                      >
                        <p
                          class="text-xl font-semibold text-gray-200"
                        >
                          Improve your customer experience
                        </p>
                        <p
                          class="mt-3 text-base text-gray-500"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.
                        </p>
                      </a>
                    </div>
                    <div
                      class="flex items-center mt-6"
                    >
                      <div
                        class="flex-shrink-0"
                      >
                        <a
                          href="/user/daniela-metz"
                        >
                          <span
                            class="sr-only"
                          >
                            Daniela Metz
                          </span>
                          <img
                            alt=""
                            class="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          />
                        </a>
                      </div>
                      <div
                        class="ml-3"
                      >
                        <p
                          class="text-sm font-medium text-gray-200"
                        >
                          <a
                            class="hover:underline"
                            href="/user/daniela-metz"
                          >
                            Daniela Metz
                          </a>
                        </p>
                        <div
                          class="flex space-x-1 text-sm text-gray-500"
                        >
                          <time
                            datetime="2020-02-12"
                          >
                            Feb 12, 2022
                          </time>
                          <span
                            aria-hidden="true"
                          >
                            ·
                          </span>
                          <span>
                            11 min
                             read
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
