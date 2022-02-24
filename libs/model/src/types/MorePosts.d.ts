import { Author } from './Author';
import { Category } from './Category';
import { Image } from './Image';

/**
 * Used as the response type on individual blog post
 */
export type MorePosts = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: Author;
  category: Category;
  coverImage: Image;
};
