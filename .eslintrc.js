module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: 'google',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'array-bracket-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        args: 'all',
        argsIgnorePattern: '^_'
      }
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true
      }
    ],
    semi: 0
  }
};
