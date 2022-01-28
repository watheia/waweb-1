/**
 * Copyright 2020 Vercel Inc.
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

import cn from 'classnames';
import styles from './hero.module.css';
import useConfig from './hooks/use-config';
import styleUtils from './utils.module.css';

export default function Hero() {
  const config = useConfig();
  return (
    <div className={styles['wrapper']}>
      <h2
        className={cn(
          styleUtils['appear'],
          styleUtils['appear-third'],
          styleUtils['show-on-mobile'],
          styles['description']
        )}
      >
        {config.siteDescription}
      </h2>
      <h1
        className={cn(
          styleUtils['appear'],
          styleUtils['appear-third'],
          styles['hero']
        )}
      >
        The first {config.brandName}
        <br className={styleUtils['show-on-desktop']} /> global user conference
      </h1>
      <h2
        className={cn(
          styleUtils['appear'],
          styleUtils['appear-third'],
          styleUtils['show-on-tablet'],
          styles['description']
        )}
      >
        {config.siteDescription}
      </h2>
      <div
        className={cn(
          styleUtils['appear'],
          styleUtils['appear-fourth'],
          styles['info']
        )}
      >
        <p>Jan 1st, 2022</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Online</strong>
        </p>
      </div>
    </div>
  );
}