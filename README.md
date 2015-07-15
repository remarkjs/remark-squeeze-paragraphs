[![npm](https://nodei.co/npm/mdast-squeeze-paragraphs.png)](https://npmjs.com/package/mdast-squeeze-paragraphs)

# mdast-squeeze-paragraphs

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Remove empty paragraphs left from other [mdast] transformations.

This module provides both AST transformation and a plugin.

[mdast]: https://github.com/wooorm/mdast

[travis]: https://travis-ci.org/eush77/mdast-squeeze-paragraphs
[travis-badge]: https://travis-ci.org/eush77/mdast-squeeze-paragraphs.svg
[david]: https://david-dm.org/eush77/mdast-squeeze-paragraphs
[david-badge]: https://david-dm.org/eush77/mdast-squeeze-paragraphs.png

## Example

```js
> mdastSqueezeParagraphs = require('mdast-squeeze-paragraphs/plugin')

> mdast.use(mdastStripBadges)
       .process('![](http://img.shields.io/)\n\ntext')
'\n\ntext\n'

> mdast.use(mdastStripBadges)
       .use(mdastSqueezeParagraphs)
       .process('![](http://img.shields.io/)\n\ntext')
'text\n'
```

## API

#### `mdastSqueezeParagraphs(ast)`

Remove empty paragraphs from the AST. Return the reference to the AST for convenience.

#### `mdast.use(require('mdast-squeeze-paragraphs/plugin'))`

Use this transformation as a plugin.

## Install

```
npm install mdast-squeeze-paragraphs
```

## License

MIT
