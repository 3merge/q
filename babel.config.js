const withPackageOpts = (s) => `./packages/${s}/src`;
const withBundledDir = (s) => `${s}/lib`;

const alias = [
  'q3-admin',
  'q3-ui-assets',
  'q3-ui-locale',
  'q3-ui',
  'q3-ui-datatables',
  'q3-ui-dialog',
  'q3-ui-filters',
  'q3-ui-forms',
  'q3-ui-helpers',
  'q3-ui-permissions',
  'q3-ui-repeater',
  'q3-ui-test-utils',
  'q3-ui-rest',
].reduce(
  (acc, curr) =>
    Object.assign(acc, {
      [withBundledDir(curr)]: withPackageOpts(curr),
      [curr]: withPackageOpts(curr), // default exports
    }),
  {},
);

const withAlias = {
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.json'],
        root: ['.'],
        alias,
      },
    ],
  ],
};

const config = {
  plugins: ['@babel/plugin-proposal-export-namespace-from'],
  presets: [
    [
      '@babel/preset-env',
      {
        'targets': {
          'node': 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
  env: {
    test: withAlias,
    development: withAlias,
    production: withAlias,
  },
};

module.exports = config;
