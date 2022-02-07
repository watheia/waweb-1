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

import { Stakeholder } from '@waweb/model';
import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import styles from './stakeholder-section.module.css';
import styleUtils from './utils.module.css';

type Props = {
  stakeholder: Stakeholder;
};

export default function StakeholderSection({ stakeholder }: Props) {
  return (
    <>
      <Link href="/expo">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={styles['backlink']}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to expo
        </a>
      </Link>
      <div className={styles['layout']}>
        <iframe
          className={cn(
            styles['video'],
            styleUtils['appear'],
            styleUtils['appear-first']
          )}
          allow="picture-in-picture"
          allowFullScreen
          frameBorder="0"
          height="100%"
          src={`https://youtube.com/embed/${stakeholder.youtubeSlug}`}
          title={stakeholder.name}
          width="100%"
        />
        <div className={styles['container']}>
          <div className={styles['name-and-logo']}>
            <Image
              alt={stakeholder.name}
              src={stakeholder.logo?.url}
              className={styles['image']}
              loading="lazy"
              title={stakeholder.name}
              height={64}
              width={64}
            />
            <h1 className={styles['name']}>{stakeholder.name}</h1>
          </div>
          <p className={styles['description']}>{stakeholder.description}</p>
          <div className={styles['stakeholder-details']}>
            <a
              href={stakeholder.callToActionLink}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className={styles['button']}
            >
              {stakeholder.callToAction}
            </a>
            <a
              href={stakeholder.discord}
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className={cn(styles['button'], styles['button-link'])}
            >
              Chat on Discord
            </a>
          </div>
          <div className={styles['resources']}>
            <h2 className={styles['heading']}>Resources</h2>
            {stakeholder.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(styles['button'], styles['button-resource'])}
              >
                <span className={styles['truncate']}>{link.text}</span>
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
