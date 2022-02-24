import allPosts from './fixtures/allPosts.json';
import content from './fixtures/content.json';

export const fixtures = { allPosts, content };

export type { BlogPostProps } from './lib/blog-post';
export { default as BlogPostView } from './lib/blog-post';

export type { BlogProps } from './lib/blog';
export { default as BlogView } from './lib/blog';

export { default as Avatar } from './lib/components/avatar';
export { default as CoverImage } from './lib/components/cover-image';
export { default as Date } from './lib/components/date';
