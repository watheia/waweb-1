import { createContext, useContext } from 'react';

interface NavZone {
  name: string;
  route: string;
}

interface SiteConfig {
  baseUrl: string;
  brandName: string;
  legalName: string;
  metaDescription: string;
  repo: string;
  siteDescription: string;
  siteName: string;
  legalUrl: string;
  navigation: NavZone[];
}

const Context = createContext<SiteConfig>({
  baseUrl: 'https://watheia.io',
  brandName: 'Watheia',
  legalName: 'Watheia Labs, LLC',
  metaDescription:
    'Watheia Labs, LLC is a modern software development and digital design agency located in Washington state',
  repo: 'https://github.com/drkstr101/watheia',
  siteDescription: '',
  siteName: 'Watheia Labs',
  legalUrl: '#',
  navigation: [
    {
      name: 'Home',
      route: '/home',
    },
    {
      name: 'Blog',
      route: '/blog',
    },
    {
      name: 'Support',
      route: '/support',
    },
    {
      name: 'Expo',
      route: '/expo',
    },
  ],
});

// Provider in your app

// const sampleAppContext: AppContextInterface = {
//   name: 'Using React Context in a Typescript App',
//   author: 'thehappybug',
//   url: 'http://www.example.com',
// };

// export const ConfigProvider = (props) => (
//   <Context.Provider>{props.children}</Context.Provider>
// );

// eslint-disable-next-line @typescript-eslint/no-empty-interface

export function useConfig(): SiteConfig {
  return useContext(Context);
}

export default useConfig;
