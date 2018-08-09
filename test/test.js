'use strict'

var squeezeParagraphs = require('..')

var test = require('tape')

var remark = require('remark')

test(function(t) {
  var input = require('./input')
  var output = require('./output')

  t.deepEqual(
    remark()
      .use(squeezeParagraphs)
      .runSync(input),
    output
  )

  t.end()
})
