const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  mode: 'jit',
  darkMode: true,
  presets: [require('../../tailwind-presets.config.js')],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{js,jsx,ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
