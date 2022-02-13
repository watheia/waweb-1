import Link from 'next/link';
import { ResponsiveImageType } from 'react-datocms';
import { Author, Image } from '../types';
import Avatar from './avatar';
import CoverImage from './cover-image';
import Date from './date';

export interface HeroPostProps {
  title: string;
  coverImage: Image;
  slug: string;
  date: string;
  excerpt: string;
  author: Author;
}

export default function HeroPost(props: HeroPostProps) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={props.title}
          responsiveImage={props.coverImage.responsiveImage}
          slug={props.slug}
        />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight text-gray-300 lg:text-6xl">
            <Link href={`/blog/posts/${props.slug}`}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="hover:underline">{props.title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={props.date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            {props.excerpt}
          </p>
          <Avatar name={props.author.name} picture={props.author.picture} />
        </div>
      </div>
    </section>
  );
}
