import test from 'tape'
import {remark} from 'remark'
import {u} from 'unist-builder'
import remarkSqueezeParagraphs from './index.js'

test('remark-squeeze-paragraphs', function (t) {
  t.deepEqual(
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
      u('paragraph', [u('text', 'second'), u('text', ' '), u('text', 'value')])
    ])
  )

  t.end()
})
