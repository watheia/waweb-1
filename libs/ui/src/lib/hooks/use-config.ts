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
  defaultAvatar: string;
  navigation: NavZone[];
}

const Context = createContext<SiteConfig>({
  baseUrl: 'https://watheia.io',
  brandName: 'Watheia',
  legalName: 'Watheia Labs, LLC',
  metaDescription:
    'Watheia Labs, LLC is a modern software development and digital design agency located in Washington state',
  repo: 'https://gitlab.com/watheia/waweb',
  siteDescription: '',
  siteName: 'Watheia Labs',
  legalUrl: '#',
  defaultAvatar:
    'https://kgkcfphpovhbptsscyyj.supabase.in/storage/v1/object/sign/avatars/supabot.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL3N1cGFib3QucG5nIiwiaWF0IjoxNjQ0Mzc1NDgwLCJleHAiOjE5NTk3MzU0ODB9.4VjLwEr-iwyZ2wdxr3V0aXEY6XIzb3I42cnTfRWkXOY',
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
