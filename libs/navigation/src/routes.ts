export interface NavRoute {
  name: string;
  href: string;
  icon?: string;
}

const routes: Record<string, NavRoute> = {
  home: { name: 'Home', href: '/home' },
  blog: { name: 'Blog', href: '/blog' },
  expo: { name: 'Expo', href: '/expo' },
  auth: { name: 'Auth', href: '/' },
};

export default routes;
