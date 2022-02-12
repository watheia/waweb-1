import { withRoot } from '@waweb/layout';
import '@waweb/theme.styles/index.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);
  const App = withRoot(() => <Component {...pageProps} />);
  return (
    <>
      <Head>
        <title>Welcome to home!</title>
      </Head>
      <App />
    </>
  );
}

export default CustomApp;
