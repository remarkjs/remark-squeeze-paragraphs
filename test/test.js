'use strict';

var mdastSqueezeParagraphs = require('..'),
    mdastSqueezeParagraphsPlugin = require('../plugin');

var test = require('tape'),
    mdast = require('mdast'),
    clone = require('clone');


test(function (t) {
  var input = require('./input');
  var output = require('./output');

  t.deepEqual(mdastSqueezeParagraphs(clone(input)), output,
              'Works as an AST transformation');
  t.deepEqual(mdast.use(mdastSqueezeParagraphsPlugin).run(input), output,
              'Works as a plugin');
  t.end();
});
