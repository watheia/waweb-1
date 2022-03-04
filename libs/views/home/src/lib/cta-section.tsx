import { ExternalLinkIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Image from 'next/image';
import { DivProps } from '@waweb/model';
import { Header, Text } from '@waweb/atoms';

const defaultCoverImage =
  'https://www.datocms-assets.com/63265/1646184118-photo-1525130413817-d45c1d127c42.jpeg';

export interface CtaSectionProps extends DivProps {
  coverImage?: string;
  title?: string;
  subTitle?: string;
}

const CtaSection = ({
  coverImage = defaultCoverImage,
  ...props
}: CtaSectionProps) => (
  <section className="relative bg-slate-900" {...props}>
    <div className="relative h-56 bg-teal-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <Image
        layout="fill"
        className="object-cover w-full h-full"
        src={coverImage}
        alt="Cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 mix-blend-multiply"
      />
    </div>
    <div className="relative max-w-md px-4 py-12 mx-auto sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
      <div className="md:ml-auto md:w-1/2 md:pl-10">
        <Header element="h2" variant="subtitle" className="text-slate-50">
          Award winning support
        </Header>
        <Header element="p" variant="title">
          We&apos;re here to help
        </Header>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
          tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
          et fermentum, augue. Aliquet amet volutpat quisque ut interdum
          tincidunt duis.
        </Text>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <Link href="/contact">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium bg-white border border-transparent rounded-md text-slate-900 hover:bg-gray-50">
                Get in touch
                <ExternalLinkIcon
                  className="w-5 h-5 ml-3 -mr-1 text-slate-700"
                  aria-hidden="true"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CtaSection;
