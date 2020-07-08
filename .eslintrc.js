module.exports = {
  env: {
    es2020: false,
    node: true,
    es2019: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
