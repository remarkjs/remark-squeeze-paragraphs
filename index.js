'use strict';


module.exports = function (ast) {
  ast.children = ast.children.filter(function (node) {
    return node.type != 'paragraph' || node.children.some(function (node) {
      return node.type != 'text' || !/^\s*$/.test(node.value);
    });
  });

  return ast;
};
