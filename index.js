'use strict';


module.exports = function (ast) {
  ast.children = ast.children.filter(function (node) {
    return !(node.type == 'paragraph' && !node.children.length);
  });

  return ast;
};
