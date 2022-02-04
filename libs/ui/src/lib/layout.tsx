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

import { SkipNavContent } from '@reach/skip-nav';
import cn from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from './footer';
import useConfig from './hooks/use-config';
import styles from './layout.module.css';
import Logo from './logo';
import MobileMenu from './mobile-menu';
import ViewSource from './view-source';

type Props = {
  children: React.ReactNode;
  className?: string;
  hideNav?: boolean;
  layoutStyles?: any;
};

export default function Layout({
  children,
  className,
  hideNav,
  layoutStyles,
}: Props) {
  const config = useConfig();
  const router = useRouter();
  const activeRoute = router.asPath;

  return (
    <>
      <ViewSource />
      <div className={styles['background']}>
        {!hideNav && (
          <header className={cn(styles['header'])}>
            <div className={styles['header-logos']}>
              <MobileMenu key={router.asPath} />
              <Link href="/">
                {/* eslint-disable-next-line */}
                <a className={styles['logo']}>
                  <Logo height="100%" />
                </a>
              </Link>
            </div>
            <div className={styles['tabs']}>
              {config.navigation.map(({ name, route }) => (
                <Link key={name} href={route}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    className={cn(styles['tab'], {
                      [styles['tab-active']]: activeRoute.startsWith(route),
                    })}
                  >
                    {name}
                  </a>
                </Link>
              ))}
            </div>
            {/* <div className={cn(styles['header-right'])}>
              <Logo />
            </div> */}
          </header>
        )}
        <div className={styles['page']}>
          <main className={styles['main']} style={layoutStyles}>
            <SkipNavContent />
            <div className={cn(styles['full'], className)}>{children}</div>
          </main>
          {!activeRoute.startsWith('/stage') && <Footer />}
        </div>
      </div>
    </>
  );
}
