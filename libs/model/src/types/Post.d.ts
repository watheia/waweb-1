import { SeoTag } from 'react-datocms';
import { Author } from './Author';
import { Category } from './Category';
import { Content } from './Content';
import { OgImage } from './OgImage';

/**
 * Contains the full blog post content
 */
export type Post = {
  title: string;
  slug: string;
  date: string;
  author: Author;
  coverImage: Image;
  ogImage: OgImage;
  content?: Content;
  category: Category;
  seo: Array<SeoTag>;
};
