/**
 * @fileoverview Don't import from React Native!
 * @author Jon Gold
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-react-native-imports');
const { RuleTester } = require('eslint');

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
});

require('babel-eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('no-react-native-imports', rule, {
  valid: [
    { code: "import { Text, View } from 'react-primitives';" },
    { code: "const { Text, View } = require('react-primitives')" },
    {
      code: "// @platforms: ios, android\nimport { Text, View } from 'react-native'",
      options: [{ ignoreMark: '@platforms' }],
    },
    {
      code: "// @platforms: ios, android\nconst { Text, View } = require('react-native')",
      options: [{ ignoreMark: '@platforms' }],
    },
  ],

  invalid: [
    {
      code: "const { Text, View } = require('react-native');",
      errors: [
        {
          message: 'Found react-native import. Refactor to react-primitives.',
          type: 'CallExpression',
        },
      ],
    },
    {
      code: "import { Text, View } from 'react-native';",
      errors: [
        {
          message: 'Found react-native import. Refactor to react-primitives.',
          type: 'ImportDeclaration',
        },
      ],
    },
    {
      code: "const { Text, View } = require('react-native');",
      options: [{ error: 'some custom error' }],
      errors: [
        {
          message: 'some custom error',
          type: 'CallExpression',
        },
      ],
    },
    {
      code: "import { Text, View } from 'react-native';",
      options: [{ error: 'some custom error' }],
      errors: [
        {
          message: 'some custom error',
          type: 'ImportDeclaration',
        },
      ],
    },
  ],
});
