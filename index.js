'use strict';


module.exports = function () {
  return function (ast) {
    ast.children = ast.children.filter(function (node) {
      return !(node.type == 'paragraph' && !node.children.length);
    });
  };
};
