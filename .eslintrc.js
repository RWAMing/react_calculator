module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:react/jsx-runtime'],

  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['react', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'no-plusplus': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'max-depth': ['error', 2],
    'max-params': ['error', 3],
    'no-console': 'off',
    'object-curly-newline': 'off',
  },
};
