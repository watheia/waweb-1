import { Talk } from './Talk';
export interface Stage {
  name: string;
  slug: string;
  stream: string;
  discord: string;
  schedule: Talk[];
}
