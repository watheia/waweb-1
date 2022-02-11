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

import { SkipNavContent } from '@reach/skip-nav';
import { MessageList, useMessage } from '@waweb/message';
import cn from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from './footer';
import navigation from './navigation';
import styles from './layout.module.css';
import MobileMenu from './mobile-menu';
import { Logo, ViewSource } from '@waweb/atoms';
import { DivProps } from '@waweb/model';

export interface LayoutProps extends DivProps {
  hideNav?: boolean;
  layoutStyles?: any;
  usePadding?: boolean;
  useBackdrop?: boolean;
}

export default function Layout({
  children,
  className,
  hideNav,
  layoutStyles,
  usePadding = false,
  useBackdrop = false,
}: LayoutProps) {
  const router = useRouter();
  const activeRoute = router?.asPath ?? '/';
  const { messages } = useMessage();

  return (
    <>
      <ViewSource />
      <div className={cn(useBackdrop && styles['backdrop'])}>
        {!hideNav && (
          <header className={cn(styles['header'])}>
            <div className={styles['header-logos']}>
              <MobileMenu key={router?.asPath ?? '/'} />
              <Link href="/">
                {/* eslint-disable-next-line */}
                <a className={styles['logo']}>
                  <Logo />
                </a>
              </Link>
            </div>
            <div className={styles['tabs']}>
              {navigation.map(({ name, route }) => (
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
          </header>
        )}
        <div className={styles['page']}>
          <MessageList messages={messages} />
          <SkipNavContent />
          <main
            className={cn(
              styles['main'],
              usePadding && 'px-2 py-1 sm:px-6 lg:px-8'
            )}
            style={layoutStyles}
          >
            <div className={cn(styles['full'], className)}>{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
