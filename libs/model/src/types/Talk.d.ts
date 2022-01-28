import { Speaker } from './Speaker';

export interface Talk {
  title: string;
  description: string;
  start: string;
  end: string;
  speaker: Speaker[];
}
