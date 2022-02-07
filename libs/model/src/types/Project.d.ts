import { Author } from './Author';

export interface Project {
  title: string;
  description: string;
  start: string;
  end: string;
  stakeholders: Author[];
}
