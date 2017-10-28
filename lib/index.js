/**
 * @fileoverview Eslint rules for using React Primitives
 * @author Jon Gold
 */

const noReactNativeImports = require('./rules/no-react-native-imports');

module.exports.configs = {
  recommended: {
    rules: {
      'react-primitives/no-react-native-imports': [2, { ignoreMark: '@platforms' }],
    },
  },
};
module.exports.rules = {
  'no-react-native-imports': noReactNativeImports,
};
