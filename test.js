import assert from 'node:assert/strict'
import test from 'node:test'
import {remark} from 'remark'
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs'
import {u} from 'unist-builder'

test('remark-squeeze-paragraphs', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(
      Object.keys(await import('remark-squeeze-paragraphs')).sort(),
      ['default']
    )
  })

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
