/**
 * Copyright 2022 Watheia Labs, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Author } from '@waweb/model';
import Image from 'next/image';
import Link from 'next/link';
import styles from './authors-grid.module.css';

type Props = {
  authors: Author[];
};

export default function AuthorsGrid({ authors }: Props) {
  return (
    <div className={styles['grid']}>
      {authors.map((author) => (
        <Link key={author.name} href={`/authors/${author.slug}`}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a role="button" tabIndex={0} className={styles['card']}>
            <div className={styles['imageWrapper']}>
              {author.image && (
                <Image
                  alt={author.name}
                  src={author.image.url}
                  className={styles['image']}
                  loading="lazy"
                  quality="50"
                  title={author.name}
                  placeholder={author.image.blurDataURL ? 'blur' : 'empty'}
                  blurDataURL={author.image.blurDataURL}
                  width={300}
                  height={300}
                />
              )}
            </div>
            <div className={styles['cardBody']}>
              <div>
                <h2 className={styles['name']}>{author.name}</h2>
                <p className={styles['title']}>
                  {`${author.title} @ `}
                  <span className={styles['company']}>{author.company}</span>
                </p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
