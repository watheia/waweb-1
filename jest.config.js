const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: getJestProjects(),
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `__mocks__/file-mock.js`,
    '\\.svg': '__mocks__/svg.js',
  },
  setupFiles: ['jest.config.js'],
};
