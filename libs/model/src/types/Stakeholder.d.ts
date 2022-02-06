import { Image } from './Image';
import { StakeholderLink } from './StakeholderLink';

export interface Stakeholder {
  name: string;
  description: string;
  slug: string;
  website: string;
  callToAction: string;
  callToActionLink: string;
  links: StakeholderLink[];
  discord: string;
  tier: string;
  cardImage: Image;
  logo: Image;
  youtubeSlug: string;
}
