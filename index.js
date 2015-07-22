'use strict';


module.exports = function (ast) {
  ast.children = ast.children.filter(function (node) {
    if (node.type == 'paragraph') {
      // Remove empty text nodes.
      node.children = node.children.filter(function (node) {
        return node.type != 'text' || !/^\s*$/.test(node.value);
      });

      return node.children.length;
    }

    return true;
  });

  return ast;
};
