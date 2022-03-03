import { Author } from './Author';
import { Category } from './Category';
import { ResponsiveImage } from './ResponsiveImage';

export type PostSummary = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: Category;
  author: Author;
  coverImage: ResponsiveImage;
};
