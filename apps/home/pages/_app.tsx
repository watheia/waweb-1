import '@waweb/base-ui.theme.styles/dist/index.css';
import Theme from '@waweb/theme';
import NProgress from '@waweb/ui.nprogress';
import ResizeHandler from '@waweb/ui.resize-handler';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { OverlayProvider, SSRProvider } from 'react-aria';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);
  return (
    <>
      <Head>
        <title>Welcome to home!</title>
      </Head>
      <SSRProvider>
        <OverlayProvider>
          <Theme>
            <Component {...pageProps} />
          </Theme>
          <ResizeHandler />
          <NProgress />
        </OverlayProvider>
      </SSRProvider>
    </>
  );
}

export default CustomApp;
