module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    semi: 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['js', 'jsx', '.tsx', '.ts'] },
    ],
    'import/extensions': ['always', { tsx: 'always' }],
  },
}
