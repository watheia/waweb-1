import allPosts from './fixtures/allPosts.json';
import content from './fixtures/content.json';

export type { DatoCmsRequest } from './lib/datocms/request';
export * from './lib/datocms/request';
export * from './lib/datocms/fragments';

export const fixtures = { allPosts, content };

export type { BlogPostProps } from './lib/blog-post';
export { default as BlogPostView } from './lib/blog-post';

export type { BlogProps } from './lib/blog';
export { default as BlogView } from './lib/blog';
