import { PostSummary } from './PostSummary';
import { Blog } from './Blog';
import { Site } from './Site';

/**
 * The payload data of an {AllPostsResponse}
 */
export type AllPostsData = {
  allPosts: Array<PostSummary>;
  blog: Blog;
  site: Site;
};
