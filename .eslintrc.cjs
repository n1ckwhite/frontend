module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'sonarjs', 'unicorn'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    'node': true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    include: ['.'],
    project: ['./tsconfig.json', './tsconfig.node.json'],
    sourceType: 'module',
  },
  rules: {
    'no-duplicate-imports': 1,
    'import/exports-last': 0,
    'import/extensions': 0,
    'import/imports-first': 1,
    'import/no-duplicates': 0,
    'import/prefer-default-export': 0,
    'import/newline-after-import': 1,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 0,
    'no-return-assign': 0,
    'unicorn/no-empty-file': 0,
    'import/order': [
      1,
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'type', 'internal', 'parent', 'sibling', 'index', 'object'],
      },
    ],
    semi: [2, 'never'],
    'no-extra-semi': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'consistent-return': 0,
    '@typescript-eslint/no-extra-semi': 2,
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { "blankLine": 'always', "prev": "*", "next": "return" },
      { "blankLine": 'always', "prev": "*", "next": "if" }
    ],
    '@typescript-eslint/semi': [2, 'never'],
    'unicorn/import-style': 0,
    'unicorn/prefer-module': 0,
    'no-param-reassign': [2, { props: true, ignorePropertyModificationsFor: ['draft', 'acc', 'state'] }],
    'react/display-name': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': [2, { callbacksLast: true }],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'function-expression',
      },
    ],
    '@typescript-eslint/naming-convention': [
      2,
      {
        format: ['PascalCase'],
        prefix: ['I'],
        selector: 'interface',
        filter: {
          regex: 'Window|ProcessEnv',
          match: false,
        }
      },
      {
        format: ['PascalCase'],
        prefix: ['T'],
        selector: 'typeAlias',
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
    ],
    'max-len': ["error", { "code": 120 }],
    'max-lines': [2, 300],
    'sonarjs/no-duplicate-string': 0,
    'unicorn/consistent-destructuring': 0,
    'unicorn/expiring-todo-comments': 0,
    'unicorn/filename-case': 0,
    'unicorn/no-array-for-each': 0,
    'unicorn/no-document-cookie': 0,
    'unicorn/prefer-dom-node-text-content': 0,
    'unicorn/prefer-set-has': 0,
    'unicorn/no-array-reduce': 0,
    'unicorn/no-null': 0,
    'unicorn/number-literal-case': 0,
    'unicorn/explicit-length-check': 0,
    'unicorn/consistent-function-scoping': 0,
    'unicorn/prefer-node-protocol': 0,
    'unicorn/prefer-object-from-entries': 0,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/text-encoding-identifier-case': 0,
    'unicorn/no-array-callback-reference': 0,
    'react/button-has-type': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/no-autofocus': 0,
    '@typescript-eslint/quotes': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'no-restricted-exports': 0,
    'no-console': ["error", { allow: ["warn", "error"] }],
    'jsx-a11y/label-has-associated-control': 0,
    "import/no-extraneous-dependencies": [
      "off",
      {
        "devDependencies": true,
        "optionalDependencies": true,
        "peerDependencies": true,
      }
    ],
    'import/no-cycle': 0
  },
}
