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

import useConfig from './hooks/use-config';
import VercelLogo from './icons/icon-platform';
import Logo from './logo';
import styles from './ticket-info.module.css';
import styleUtils from './utils.module.css';

export default function TicketInfo({
  logoTextSecondaryColor = 'var(--accents-5)',
}) {
  const config = useConfig();
  const siteUrl = new URL(config.baseUrl);
  const siteUrlForTicket = `${siteUrl.host}${siteUrl.pathname}`.replace(
    /\/$/,
    ''
  );
  const createdBy = (
    <div className={styles['created-by']}>
      <div className={styles['created-by-text']}>Created by </div>
      <div className={styles['created-by-logo']}>
        <VercelLogo height="100%" color="var(--accents-4)" />
      </div>
    </div>
  );
  return (
    <div className={styles['info']}>
      <div className={styles['logo']}>
        <Logo />
      </div>
      <div className={styles['date']}>
        <div>Jan 1st, 2022</div>
        <div>ONLINE</div>
      </div>
      <div className={styleUtils['hide-on-mobile']}>{createdBy}</div>
      <div className={styles['url']}>{siteUrlForTicket}</div>
      <div className={styleUtils['show-on-mobile']}>{createdBy}</div>
    </div>
  );
}
