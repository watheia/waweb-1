import Link from 'next/link';
import { ResponsiveImageType } from 'react-datocms';
import Avatar from './avatar';
import CoverImage from './cover-image';
import Date from './date';

export interface PostPreviewProps {
  slug: string;
  title: string;
  coverImage: { responsiveImage: ResponsiveImageType };
  date: string;
  excerpt: string;
  author: { name: string; picture: { responsiveImage: ResponsiveImageType } };
}

export default function PostPreview(props: PostPreviewProps) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={props.slug}
          title={props.title}
          responsiveImage={props.coverImage.responsiveImage}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug text-gray-300">
        <Link href={`/blog/posts/${props.slug}`}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="hover:underline">{props.title}</a>
        </Link>
      </h3>
      <div className="mb-4 text-lg text-gray-400">
        <Date dateString={props.date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed text-gray-300">
        {props.excerpt}
      </p>
      <Avatar name={props.author.name} picture={props.author.picture} />
    </div>
  );
}
