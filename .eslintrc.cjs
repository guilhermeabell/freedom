module.exports = {
  root: true,
  overrides: [
    {
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        sourceType: 'module',
      },
      plugins: ['react-refresh'],
      files: ['./**/*.{ts,tsx}'],
      settings: {
        'import/resolver': {
          alias: {
            map: [['@', './src']],
            extensions: ['.ts', '.tsx'],
          },
        },
      },
    },
    {
      files: ['./**/*.test.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'react-refresh/only-export-components': 'off',
      },
    },
  ],
}
