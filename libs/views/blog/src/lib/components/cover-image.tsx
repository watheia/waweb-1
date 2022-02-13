import { Image, ResponsiveImageType } from 'react-datocms';
import cn from 'clsx';
import Link from 'next/link';
import { DivProps } from '@waweb/model';

export interface CoverImageProps extends DivProps {
  responsiveImage: ResponsiveImageType;
  title: string | undefined;
  slug: any;
}
export default function CoverImage({
  responsiveImage,
  title,
  slug,
  ...props
}: CoverImageProps) {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className="-mx-5 sm:mx-0" {...props}>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
