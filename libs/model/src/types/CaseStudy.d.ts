import { Author } from './Author';

export interface CaseStudy {
  title: string;
  description: string;
  start: string;
  end: string;
  author: Author[];
}
