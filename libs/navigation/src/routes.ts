export interface NavRoute {
  name: string;
  route: string;
}

const routes: Record<string, NavRoute> = {
  home: { name: 'Home', route: '/home' },
  blog: { name: 'Blog', route: '/blog' },
  expo: { name: 'Expo', route: '/expo' },
  auth: { name: 'Auth', route: '/' },
};

export default routes;
