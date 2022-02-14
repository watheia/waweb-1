import { request } from './request';

export default async function getAllPostsWithSlug() {
  const data = await request(`{ allPosts { slug } }`);
  return data?.allPosts;
}
