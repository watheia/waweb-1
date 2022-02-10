import { Category, DivProps, Post } from '@waweb/model';
import BlogFeatured from './blog-featured';
import BlogHero from './blog-hero';
import clsx from 'clsx';
import styles from './blog.module.css';

export interface BlogProps extends DivProps {
  categories: Category[];
  posts: Post[];
}

export default function Blog({
  className,
  categories,
  posts,
  ...props
}: BlogProps) {
  return (
    <div {...props} className={clsx(styles['root'], className)}>
      <BlogHero categories={categories} />
      <BlogFeatured posts={posts} />
    </div>
  );
}
