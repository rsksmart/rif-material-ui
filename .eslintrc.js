module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/prop-types': 'off',
    indent: 'warn',
    'no-unused-vars': 'warn',
    'no-trailing-spaces': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-unreachable': 'warn',
    'react/display-name': 'off',
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off'
  },
  settings: {
    react: {
      version: 'latest'
    }
  }
}
