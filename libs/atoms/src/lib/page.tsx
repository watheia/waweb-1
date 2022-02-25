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
import Head from 'next/head';
import { useRouter } from 'next/router';
import useConfig from '@waweb/config';
import { renderMetaTags, TitleMetaLinkTag } from 'react-datocms';

type Meta = {
  title: string | null;
  description: string | null;
  image?: string | null;
  url?: string | null;
};

type Props = {
  meta?: Meta;
  metaTags?: TitleMetaLinkTag[];
  children: React.ReactNode;
  fullViewport?: boolean;
};

export default function Page({
  meta,
  metaTags,
  children,
  fullViewport = false,
}: Props) {
  const router = useRouter();
  const config = useConfig();
  const path = router?.asPath ?? '/';

  const image = meta?.image || '/twitter-card.png';
  const title = meta?.title || config.siteName;
  const url = meta?.url ?? `${config.baseUrl}${path}`;
  const description = meta?.description ?? config.siteName;

  return (
    <div className={cn('page-container', { full: fullViewport })}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:site" content={`@watheia`} />
        <meta
          name="twitter:card"
          content={image ? 'summary_large_image' : 'summary'}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {image && (
          <meta
            property="og:image"
            content={
              image.startsWith('https://') ? image : `${config.baseUrl}${image}`
            }
          />
        )}
        {metaTags && renderMetaTags(metaTags)}
      </Head>
      {children}
    </div>
  );
}
