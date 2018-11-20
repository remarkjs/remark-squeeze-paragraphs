# remark-squeeze-paragraphs

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Chat][chat-badge]][chat]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]

Remove empty (or white-space only) paragraphs with [**remark**][remark].

## Installation

[npm][]:

```bash
npm install remark-squeeze-paragraphs
```

## Usage

```js
var remark = require('remark')
var stripBadges = require('remark-strip-badges')
var squeezeParagraphs = require('remark-squeeze-paragraphs')

remark()
  .use(stripBadges)
  .processSync('![](https://img.shields.io/)\n\ntext')
  .toString()
// => "\n\ntext\n"

remark()
  .use(stripBadges)
  .use(squeezeParagraphs)
  .processSync('![](https://img.shields.io/)\n\ntext')
  .toString()
// => "text\n"
```

## API

### `remark.use(squeezeParagraphs)`

Transform the tree to remove empty paragraphs.

## Related

*   [`mdast-squeeze-paragraphs`][mdast-squeeze-paragraphs]
    — [mdast][] transformation utility that is in the core of this plugin.

## Contribute

See [`contributing.md` in `remarkjs/remark`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © Eugene Sharygin

[build-badge]: https://img.shields.io/travis/remarkjs/remark-squeeze-paragraphs.svg

[build]: https://travis-ci.org/remarkjs/remark-squeeze-paragraphs

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-squeeze-paragraphs.svg

[coverage]: https://codecov.io/github/remarkjs/remark-squeeze-paragraphs

[downloads-badge]: https://img.shields.io/npm/dm/remark-squeeze-paragraphs.svg

[downloads]: https://www.npmjs.com/package/remark-squeeze-paragraphs

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/remark

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[license]: license

[npm]: https://docs.npmjs.com/cli/install

[contributing]: https://github.com/remarkjs/remark/blob/master/contributing.md

[coc]: https://github.com/remarkjs/remark/blob/master/code-of-conduct.md

[remark]: https://github.com/remarkjs/remark

[mdast]: https://github.com/syntax-tree/mdast

[mdast-squeeze-paragraphs]: https://github.com/eush77/mdast-squeeze-paragraphs
