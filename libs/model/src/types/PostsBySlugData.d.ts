import { MorePosts } from './MorePosts';
import { Post } from './Post';
import { Site } from './Site';

/**
 * The payload data of a {PostsBySlugResponse}
 */
export type PostsBySlugData = {
  morePosts: Array<MorePosts>;
  post: Post;
  site: Site;
};
