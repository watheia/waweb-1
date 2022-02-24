import { Image, ResponsiveImageType } from 'react-datocms';

export interface AvatarProps {
  name: string;
  picture: { responsiveImage: ResponsiveImageType };
}

export default function Avatar({ name, picture, ...props }: AvatarProps) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 mr-4">
        <Image data={picture.responsiveImage} className="rounded-full" />
      </div>
      <div className="text-xl font-bold text-white">{name}</div>
    </div>
  );
}
