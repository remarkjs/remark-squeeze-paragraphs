'use strict';

var squeezeParagraphs = require('..');

var test = require('tape'),
    remark = require('remark');


test(function (t) {
  var input = require('./input');
  var output = require('./output');

  t.deepEqual(remark.use(squeezeParagraphs).run(input), output);
  t.end();
});
