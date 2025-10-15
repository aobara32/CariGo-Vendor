import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
]
