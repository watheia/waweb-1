import Theme from '@waweb/theme';
import '@waweb/theme.styles/index.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to home!</title>
      </Head>
      <Theme>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </Theme>
    </>
  );
}

export default CustomApp;
