import { NavZone } from './NavZone';

export interface AppConfig {
  baseUrl: string;
  brandName: string;
  legalName: string;
  metaDescription: string;
  repo: string;
  siteDescription: string;
  siteName: string;
  legalUrl: string;
  twitterCard: string;
  navigation: NavZone[];
}
