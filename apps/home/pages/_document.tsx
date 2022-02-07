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

import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content="Watheia Labs" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Watheia Labs" />
          <meta name="description" content="Watheia Labs corporate homepage" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#111" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#111" />

          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

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
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://watheia.io" />
          <meta name="twitter:title" content="Watheia Labs" />
          <meta
            name="twitter:description"
            content="Watheia Labs corporate homepage"
          />
          <meta
            name="twitter:image"
            content="https://watheia.io/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@watheia" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Watheia Labs" />
          <meta
            property="og:description"
            content="Watheia Labs corporate homepage"
          />
          <meta property="og:site_name" content="Watheia Labs" />
          <meta property="og:url" content="https://watheia.io" />
          <meta
            property="og:image"
            content="https://watheia.io/apple-touch-icon.png"
          />
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
