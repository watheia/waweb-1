import { SeoTag } from 'react-datocms';
import { Content } from './Content';
import { Maybe } from './maybe';

export type Page = {
  name: string;
  path: string;
  content: Maybe<Content>;
  seo: Array<SeoTag>;
};
