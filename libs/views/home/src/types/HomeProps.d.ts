import { DivProps, PostSummary } from '@waweb/model';
import { HomeFeature } from './HomeFeature';

export interface HomeProps extends DivProps {
  features: HomeFeature[];
  posts: PostSummary[];
}
