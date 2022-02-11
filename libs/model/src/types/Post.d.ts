import { Category } from './Category';
import { User } from '@waweb/model';
export interface Post {
  title: string;
  slug: string;
  category: Category;
  description: string;
  date: string;
  datetime: string;
  image_url: string;
  reading_time: string;
  author: User;
}
