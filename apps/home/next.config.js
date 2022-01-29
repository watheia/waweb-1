// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(
  [
    // '@waweb/base-ui.theme.colors',
    // '@waweb/base-ui.theme.color-definition',
    // '@waweb/base-ui.theme.size-definition',
    // '@waweb/base-ui.theme.shadow-definition',
    // '@waweb/base-ui.theme.brand-definition',
    // '@waweb/base-ui.theme.theme-provider',
  ],
  { debug: true }
);
const withPWA = require('next-pwa');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  images: {
    domains: [
      'www.datocms-assets.com',
      'a.storyblok.com',
      'images.ctfassets.net',
      'images.prismic.io',
      'cdn.aglty.io',
      'localhost', // For Strapi
    ],
    imageSizes: [24, 64, 300],
  },
};

const pwaConfig = {};

const plugins = [[withNx], [withPWA, pwaConfig]];

module.exports = withTM(withPlugins([...plugins], nextConfig));
