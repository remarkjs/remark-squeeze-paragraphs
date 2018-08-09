'use strict'

var test = require('tape')
var remark = require('remark')
var u = require('unist-builder')
var squeezeParagraphs = require('.')

test('remark-squeeze-paragraphs', function(t) {
  t.deepEqual(
    remark()
      .use(squeezeParagraphs)
      .runSync(
        u('root', [
          u('paragraph', []),
          u('paragraph', [u('text', 'first')]),
          u('paragraph', []),
          u('paragraph', [u('text', ''), u('text', '  \n')]),
          u('paragraph', [
            u('text', 'second'),
            u('text', ' '),
            u('text', 'value')
          ]),
          u('paragraph', [])
        ])
      ),
    u('root', [
      u('paragraph', [u('text', 'first')]),
      u('paragraph', [u('text', 'second'), u('text', ' '), u('text', 'value')])
    ])
  )

  t.end()
})
