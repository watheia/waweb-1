import { CaseStudy } from './CaseStudy';
export interface Category {
  name: string;
  slug: string;
  stream?: string;
  discord?: string;
  articles: CaseStudy[];
}
