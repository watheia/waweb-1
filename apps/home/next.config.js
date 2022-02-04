const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

/**
 * Support loading `.md`, `.mdx`:
 * @param {import('@nrwl/next/plugins/with-nx').WithNxOptions} config
 * @param {*} options
 */
function webpack(config, options) {
  config.module.rules.push({
    test: /\.mdx?$/,
    use: [
      // The default `babel-loader` used by Next:
      options.defaultLoaders.babel,
      {
        loader: '@mdx-js/loader',
        /** @type {import('@mdx-js/loader').Options} */
        options: {
          /* jsxImportSource: …, otherOptions… */
        },
      },
    ],
  });
}

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  hostname: 'localhost',
  port: 4200,
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  // minify output
  swcMinify: true,
  // webpack,
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

module.exports = withPlugins([...plugins], nextConfig);
