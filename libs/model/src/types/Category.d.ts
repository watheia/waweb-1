import { Project } from './Project';
export interface Category {
  name: string;
  slug: string;
  stream?: string;
  discord?: string;
  articles: Project[];
}
