module.exports = {
  displayName: 'api-auth',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': '@swc/jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/api/auth',
};
