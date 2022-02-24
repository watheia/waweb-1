import { ResponsiveImageType } from 'react-datocms';
import Avatar from './avatar';
import CoverImage from './cover-image';
import Date from './date';
import PostTitle from './post-title';

export interface PostHeaderProps {
  title: string;
  author: { name: string; picture: { responsiveImage: ResponsiveImageType } };
  coverImage: { responsiveImage: ResponsiveImageType };
  slug: string;
  date: string;
}
export default function PostHeader(props: PostHeaderProps) {
  return (
    <>
      <PostTitle>{props.title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        <Avatar name={props.author.name} picture={props.author.picture} />
      </div>
      <div className="mb-8 -mx-5 sm:mx-0 md:mb-16">
        <CoverImage
          title={props.title}
          responsiveImage={props.coverImage.responsiveImage}
          slug={props.slug}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6 md:hidden">
          <Avatar name={props.author.name} picture={props.author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={props.date} />
        </div>
      </div>
    </>
  );
}
