import { request } from './request';

export default async function getAllPagesWithPath(): Promise<
  { path: string }[]
> {
  const data = await request(`{ allPages { path } }`);
  return data?.allPages ?? [];
}
