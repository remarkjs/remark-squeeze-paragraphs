# remark-squeeze-paragraphs

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**remark**][remark] plugin to remove empty (or whitespace only) paragraphs.

## Note!

This plugin is ready for the new parser in remark
([`remarkjs/remark#536`](https://github.com/remarkjs/remark/pull/536)).
No change is needed: it works exactly the same now as it did previously!

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[npm][]:

```sh
npm install remark-squeeze-paragraphs
```

## Use

```js
import {remark} from 'remark'
import remarkStripBadges from 'remark-strip-badges'
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs'

remark()
  .use(remarkStripBadges)
  .processSync('![](https://img.shields.io/)\n\ntext')
  .toString()
// => '\n\ntext\n'

remark()
  .use(remarkStripBadges)
  .use(remarkSqueezeParagraphs)
  .processSync('![](https://img.shields.io/)\n\ntext')
  .toString()
// => 'text\n'
```

## API

This package exports no identifiers.
The default export is `remarkSqueezeParagraphs`.

### `unified().use(remarkSqueezeParagraphs)`

Remove empty (or white-space only) paragraphs.

## Security

Use of `remark-squeeze-paragraphs` does not involve [**rehype**][rehype]
([**hast**][hast]) or user content so there are no openings for
[cross-site scripting (XSS)][xss] attacks.

## Related

*   [`mdast-squeeze-paragraphs`][mdast-squeeze-paragraphs]
    — [**mdast**][mdast] utility that is in the core of this plugin

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

[build-badge]: https://github.com/remarkjs/remark-squeeze-paragraphs/workflows/main/badge.svg

[build]: https://github.com/remarkjs/remark-squeeze-paragraphs/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-squeeze-paragraphs.svg

[coverage]: https://codecov.io/github/remarkjs/remark-squeeze-paragraphs

[downloads-badge]: https://img.shields.io/npm/dm/remark-squeeze-paragraphs.svg

[downloads]: https://www.npmjs.com/package/remark-squeeze-paragraphs

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-squeeze-paragraphs.svg

[size]: https://bundlephobia.com/result?p=remark-squeeze-paragraphs

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/HEAD/contributing.md

[support]: https://github.com/remarkjs/.github/blob/HEAD/support.md

[coc]: https://github.com/remarkjs/.github/blob/HEAD/code-of-conduct.md

[license]: license

[remark]: https://github.com/remarkjs/remark

[mdast]: https://github.com/syntax-tree/mdast

[mdast-squeeze-paragraphs]: https://github.com/syntax-tree/mdast-squeeze-paragraphs

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[rehype]: https://github.com/rehypejs/rehype

[hast]: https://github.com/syntax-tree/hast
