import { AuthProvider } from '@waweb/auth';
import { MessageProvider } from '@waweb/message';
import { Theme } from '@waweb/theme';
import '@waweb/theme.styles/index.css';
import { NProgress, ResizeHandler } from '@waweb/atoms';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { OverlayProvider, SSRProvider } from 'react-aria';
import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);
  return (
    <>
      <Head>
        <title>Welcome to home!</title>
      </Head>
      {/* <DefaultSeo {...pageSEO} /> */}
      <SSRProvider>
        <OverlayProvider>
          <Theme>
            <MessageProvider>
              <AuthProvider>
                <Component {...pageProps} />
              </AuthProvider>
            </MessageProvider>
          </Theme>
          <ResizeHandler />
          <NProgress />
        </OverlayProvider>
      </SSRProvider>
    </>
  );
}

export default CustomApp;
