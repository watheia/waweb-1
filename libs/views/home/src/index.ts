import features from './fixtures/features.json';
import posts from './fixtures/posts.json';

export type { HomeFeature } from './types/HomeFeature';
export type { HomeProps } from './types/HomeProps';

export const fixtures = { features, posts };

export { default as iconsByName } from './lib/icons-by-name';

export { default } from './lib/home';
