const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `identity-obj-proxy`,
    '\\.svg': `${__dirname}/__mocks__/svg.js`,
  },
  setupFiles: [`${__dirname}/jest.setup.js`],
};
