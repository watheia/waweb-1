const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');
const svgr = require('@svgr/rollup');
const url = require('@rollup/plugin-url');
const image = require('@rollup/plugin-image');

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);
  return {
    ...nxConfig,
    plugins: [
      ...nxConfig.plugins,
      url(),
      image(),
      svgr({
        svgo: true,
        ref: true,
        titleProp: true,
      }),
    ],
  };
};
