'use strict';


module.exports = function (ast) {
  ast.children = ast.children.filter(function (node) {
    if (node.type != 'paragraph') {
      return true;
    }

    // Remove empty text nodes.
    node.children = node.children.filter(function (node) {
      return node.type != 'text' || (node.value = node.value.trim());
    });

    return node.children.length;
  });

  return ast;
};
