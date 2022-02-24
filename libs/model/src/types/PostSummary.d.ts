import { Author } from './Author';
import { Category } from './Category';
import { Image } from './Image';

export type PostSummary = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: Category;
  author: Author;
  coverImage: Image;
};
