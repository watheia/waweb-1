import { AllPostsData } from './AllPostsData';
import { Maybe } from './maybe';

/**
 * Return response of a `get-all-posts-for-blog` query.
 */
export type AllPostsResponse = {
  data: Maybe<AllPostsData>;
};
