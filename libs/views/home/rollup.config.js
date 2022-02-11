const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');
const svgr = require('@svgr/rollup');
const url = require('@rollup/plugin-url');

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);
  return {
    ...nxConfig,
    plugins: [
      ...nxConfig.plugins,
      url(),
      svgr({
        svgo: true,
        ref: true,
        titleProp: true,
      }),
    ],
  };
};
