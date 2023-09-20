import assert from 'node:assert/strict'
import test from 'node:test'
import {remark} from 'remark'
import {u} from 'unist-builder'
import remarkSqueezeParagraphs from './index.js'

test('remark-squeeze-paragraphs', async function (t) {
  await t.test('should work', async function () {
    assert.deepEqual(
      remark()
        .use(remarkSqueezeParagraphs)
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
        u('paragraph', [
          u('text', 'second'),
          u('text', ' '),
          u('text', 'value')
        ])
      ])
    )
  })
})
