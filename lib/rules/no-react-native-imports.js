/**
 * @fileoverview Don't import from React Native!
 * @author Jon Gold
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Don't import from React Native!",
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      {
        type: 'object',
        properties: {
          ignoreMark: { type: 'string' },
          error: { type: 'string' },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    // const sourceCode = context.getSourceCode();

    const configuration = context.options[0] || {};
    const ignoreMark = configuration.ignoreMark || null;
    const error = configuration.error || 'Found react-native import. Refactor to react-primitives.';

    const any = (pred, xs) => xs.reduce((acc, x) => acc || pred(x), false);

    const isRequire = node =>
      Boolean(node &&
          node.callee &&
          node.callee.type === 'Identifier' &&
          node.callee.name === 'require' &&
          node.arguments.length === 1 &&
          node.arguments[0].type === 'Literal' &&
          typeof node.arguments[0].value === 'string');

    const ignoreFile = () => {
      if (!ignoreMark) {
        return false;
      }

      const comments = context.getAllComments();

      return any(x => x.value.includes(ignoreMark), comments);
    };

    return {
      CallExpression(node) {
        if (!ignoreFile() && isRequire(node) && node.arguments[0].value === 'react-native') {
          context.report(node, error);
        }
      },
      ImportDeclaration(node) {
        if (!ignoreFile() && node.source.value === 'react-native') {
          context.report(node, error);
        }
      },
    };
  },
};
