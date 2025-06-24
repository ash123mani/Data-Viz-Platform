import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
        indent: ['error', 2, {
            SwitchCase: 1,      // Indent switch case clauses (1 level = 2 spaces)
            VariableDeclarator: { "var": 2, "let": 2, "const": 2 },
            outerIIFEBody: 1,   // Immediately Invoked Function Expressions
            MemberExpression: 1, // Indent property chaining (obj.prop.prop)
            FunctionDeclaration: { "parameters": 1, "body": 1 },
            FunctionExpression: { "parameters": 1, "body": 1 },
            CallExpression: { "arguments": 1 },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false // Don't force indentation in ternaries
        }],
        "object-curly-spacing": ["error", "always"], // Space inside { }
    },
  },
)
