[![npm](https://nodei.co/npm/mdast-squeeze-paragraphs.png)](https://npmjs.com/package/mdast-squeeze-paragraphs)

# mdast-squeeze-paragraphs

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Remove empty paragraphs left from other [mdast] transformations.

Paragraph is considered empty if it is composed from whitespace characters.

[mdast]: https://github.com/wooorm/mdast

[travis]: https://travis-ci.org/eush77/mdast-squeeze-paragraphs
[travis-badge]: https://travis-ci.org/eush77/mdast-squeeze-paragraphs.svg
[david]: https://david-dm.org/eush77/mdast-squeeze-paragraphs
[david-badge]: https://david-dm.org/eush77/mdast-squeeze-paragraphs.png

## Example

```js
> mdastSqueezeParagraphs = require('mdast-squeeze-paragraphs')

> mdast.use(mdastStripBadges)
       .process('![](http://img.shields.io/)\n\ntext')
'\n\ntext\n'

> mdast.use(mdastStripBadges)
       .use(mdastSqueezeParagraphs)
       .process('![](http://img.shields.io/)\n\ntext')
'text\n'
```

## API

```js
var mdastSqueezeParagraphs = require('mdast-squeeze-paragraphs');

mdast.use(mdastSqueezeParagraphs)
```

Modifies AST in-place.

## CLI

```
mdast -u mdast-squeeze-paragraphs
```

## Install

```
npm install mdast-squeeze-paragraphs
```

## License

MIT
