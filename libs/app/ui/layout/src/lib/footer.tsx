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
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer
      data-testid="waweb.app/ui/layout/footer"
      className={cn(
        styles['footer'],
        'border-t border-dotted border-gray-700 bg-gray-900/75'
      )}
    >
      <div className={styles['footer-legal']}>
        <div
          data-testid="waweb.app/ui/layout/footer:copyright"
          className={styles['footer-copyright']}
        >
          Copyright © {`${new Date().getFullYear()} `} Watheia Labs, LLC. All
          rights reserved.
        </div>
        <div className={styles['footer-center-group']}>
          <p className={styles['footer-paragraph']}>
            <a
              data-testid="waweb.app/ui/layout/footer:view-source"
              href="https://gitlab.com/watheia/waweb"
              className={styles['footer-link']}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </p>
          <div className={styles['footer-separator']} />
          <p className={styles['footer-paragraph']}>
            <a
              data-testid="waweb.app/ui/layout/footer:legal"
              href="#"
              className={styles['footer-link']}
              target="_blank"
              rel="noopener noreferrer"
            >
              Legal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
