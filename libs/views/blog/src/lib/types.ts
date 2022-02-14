import { Maybe } from '@waweb/model';
import {
  ResponsiveImageType,
  SeoTag,
  TitleMetaLinkTag,
  FaviconTag,
} from 'react-datocms';

export type OgImage = {
  url: string;
};

export type Image = {
  responsiveImage: ResponsiveImageType;
};

export type Author = {
  name: string;
  picture: Image;
};

export type AllPosts = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: Author;
  coverImage: Image;
};

export type Blog = {
  seo: TitleMetaLinkTag[];
};

export type Blocks = {
  id: string;
  image: Image;
};

export type Value = {
  schema: string;
  document: Document;
};

export type Content = {
  blocks: Array<Blocks>;
  value: Value;
};

export type Site = {
  favicon: FaviconTag;
};

export type MorePosts = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: Author;
  coverImage: Image;
};

export type DocumentChildren = {
  type: string;
  value: string;
};

export type Document = {
  type: string;
  children: Array<DocumentChildren>;
};

export type Post = {
  title: string;
  slug: string;
  date: string;
  author: Author;
  coverImage: Image;
  ogImage: OgImage;
  content?: Content;
  seo: Array<SeoTag>;
};

export type PostsBySlugData = {
  morePosts: Array<MorePosts>;
  post: Post;
  site: Site;
};

export type PostsBySlugResponse = {
  data: Maybe<PostsBySlugData>;
};

export type AllPostsData = {
  allPosts: Array<AllPosts>;
  blog: Blog;
  site: Site;
};

export type AllPostsResponse = {
  data: Maybe<AllPostsData>;
};
