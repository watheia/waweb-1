import { Image } from './Image';

type Bio = { title: string; description: string };

export interface Author {
  name: string;
  title: string;
  slug: string;
  twitter: string;
  github: string;
  company: string;
  bio?: Bio;
  image: Image;
  imageSquare: Image;
}
