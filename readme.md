# remark-squeeze-paragraphs [![Build Status][build-badge]][build-status] [![Chat][chat-badge]][chat]

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
  .processSync('![](http://img.shields.io/)\n\ntext')
  .toString()
// => "\n\ntext\n"

remark()
  .use(stripBadges)
  .use(squeezeParagraphs)
  .processSync('![](http://img.shields.io/)\n\ntext')
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

[build-status]: https://travis-ci.org/remarkjs/remark-squeeze-paragraphs

[chat-badge]: https://img.shields.io/gitter/room/remarkjs/Lobby.svg

[chat]: https://gitter.im/remarkjs/Lobby

[license]: LICENSE

[npm]: https://docs.npmjs.com/cli/install

[contributing]: https://github.com/remarkjs/remark/blob/master/contributing.md

[coc]: https://github.com/remarkjs/remark/blob/master/code-of-conduct.md

[remark]: https://github.com/remarkjs/remark

[mdast]: https://github.com/syntax-tree/mdast

[mdast-squeeze-paragraphs]: https://github.com/eush77/mdast-squeeze-paragraphs
