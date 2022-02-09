module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  // uncomment the property below if you want to apply some webpack config globally
  /**
   *
   * @param {import('webpack').Configuration} config
   * @param {'development' | 'production'} configType
   * @returns
   */
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need that should apply to all storybook configs
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(png|jpg|jpeg|gif|webp|woff|woff2)$/,
        use: [{ loader: 'file-loader' }],
      },
    ];
    // Return the altered config
    return config;
  },
};
