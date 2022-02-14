import { Image, ResponsiveImageType } from 'react-datocms';

export interface AvatarProps {
  name: string;
  picture: { responsiveImage: ResponsiveImageType };
}

export default function Avatar({ name, picture, ...props }: AvatarProps) {
  return (
    <div className="flex items-center">
      <div className="mr-4 h-12 w-12">
        <Image data={picture.responsiveImage} className="rounded-full" />
      </div>
      <div className="text-xl font-bold text-white">{name}</div>
    </div>
  );
}
