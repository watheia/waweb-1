import { createContext, useContext } from 'react';
import routes from './routes';
import Router from 'next/router';

export const ROUTE_HOME = '/home';
export const ROUTE_AUTH = '/';

const navigator = {
  home: () => Router.push(ROUTE_HOME),
  auth: () => Router.push(ROUTE_AUTH),
};

export interface Route {
  name: string;
  path: string;
}

export interface Navigation {
  navigator: typeof navigator;
}

export const NavigationContext = createContext({
  navigator,
  routes,
});

export function useNavigation() {
  return useContext(NavigationContext).navigator;
}
