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

import { Project } from '@waweb/model';
import cn from 'clsx';
import { format, isAfter, isBefore, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './project-card.module.css';

type Props = {
  key: string;
  project: Project;
  showTime: boolean;
};

const formatDate = (date: string) => {
  // https://github.com/date-fns/date-fns/issues/946
  return format(parseISO(date), "h:mmaaaaa'm'");
};

export default function ProjectCard({
  project: { title, stakeholders, start, end },
  showTime,
}: Props) {
  const [isProjectLive, setIsProjectLive] = useState(false);
  const [startAndEndTime, setStartAndEndTime] = useState('');

  useEffect(() => {
    const now = Date.now();
    setIsProjectLive(
      isAfter(now, parseISO(start)) && isBefore(now, parseISO(end))
    );
    setStartAndEndTime(`${formatDate(start)} – ${formatDate(end)}`);
  }, [end, start]);

  const firstAuthorLink = `/users/${stakeholders[0].slug ?? '/supabot'}`;

  return (
    <div key={title} className={styles['project']}>
      {showTime && (
        <p className={styles['time']}>{startAndEndTime || <>&nbsp;</>}</p>
      )}
      <Link href={firstAuthorLink}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className={cn(styles['card'], {
            [styles['is-live']]: isProjectLive,
          })}
        >
          <div className={styles['card-body']}>
            <h4 title={title} className={styles['title']}>
              {title}
            </h4>
            <div className={styles['author']}>
              <div className={styles['avatar-group']}>
                {stakeholders.map((s) => (
                  <div key={s.name} className={styles['avatar-wrapper']}>
                    {s.image && (
                      <Image
                        loading="lazy"
                        alt={s.name}
                        className={styles['avatar']}
                        src={s.image.url}
                        title={s.name}
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                ))}
              </div>
              <h5 className={styles['name']}>
                {stakeholders.length === 1
                  ? stakeholders[0].name
                  : `${stakeholders.length} stakeholders`}
              </h5>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
