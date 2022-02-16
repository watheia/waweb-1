import { Category } from './Category';
export interface Post {
  title: string;
  slug: string;
  category: Category;
  description: string;
  date: string;
  datetime: string;
  image_url: string;
  reading_time: string;
  author: { username: string; slug: string; avatar_url: string };
}
