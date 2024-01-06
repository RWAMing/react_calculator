module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
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
    quotes: ['warn', 'single'], // 작은따옴표만 사용
    'prefer-const': 'warn',
    'no-plusplus': 'off', // ++연산자 불가 : off
    'no-unused-vars': 'warn', // 사용되지 않은 변수 경고
    'object-curly-spacing': ['warn', 'always'], // 중괄호 주위 공백
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // .js파일에서 jsx가능하게
    'prettier/prettier': 'error',
  },
};
