import { Theme } from '@waweb/theme';
import '@waweb/theme.styles/index.css';
import NProgress from '@waweb/ui.nprogress';
import ResizeHandler from '@waweb/ui.resize-handler';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { OverlayProvider, SSRProvider } from 'react-aria';
import { AuthProvider } from '@waweb/auth';
import { MessageProvider } from '@waweb/message';
// import seo from '../next-seo.config';
// import { DefaultSeo } from 'next-seo';

function CustomApp({ Component, pageProps }: AppProps) {
  // const pageMeta = (Component as any)?.defaultProps?.meta || {};
  // const pageSEO = { ...seo, ...pageMeta };
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
