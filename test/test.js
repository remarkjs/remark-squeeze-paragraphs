'use strict';

var mdastSqueezeParagraphs = require('..');

var test = require('tape'),
    mdast = require('mdast');


test(function (t) {
  var input = require('./input');
  var output = require('./output');

  t.deepEqual(mdast().use(mdastSqueezeParagraphs).run(input), output);
  t.end();
});
