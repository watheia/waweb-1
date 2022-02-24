import { Maybe } from './maybe';
import { PostsBySlugData } from './PostsBySlugData';

/**
 * The return response of a `get-posts-by-slug` query.
 */
export type PostsBySlugResponse = {
  data: Maybe<PostsBySlugData>;
};
