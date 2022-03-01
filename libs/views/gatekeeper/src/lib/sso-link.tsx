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

import cn from 'clsx';
import styles from './sso-link.module.css';
import { styleUtils } from '@waweb/atoms';
import Link from 'next/link';

export default function SsoLink() {
  return (
    <div
      className={cn(
        styleUtils['appear'],
        styleUtils['appear-fifth'],
        styles['root']
      )}
    >
      Or login with{' '}
      <Link href="/sso">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={styles['link']}>Gatekeeper Single Sign-On (SSO)</a>
      </Link>
      .
    </div>
  );
}
