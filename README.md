[![npm](https://nodei.co/npm/mdast-squeeze-paragraphs.png)](https://npmjs.com/package/mdast-squeeze-paragraphs)

# mdast-squeeze-paragraphs

[![Build Status](https://travis-ci.org/eush77/mdast-squeeze-paragraphs.svg)](https://travis-ci.org/eush77/mdast-squeeze-paragraphs)
[![Dependency Status][david-badge]][david]

Remove empty paragraphs left from other [mdast](http://mdast.js.org) transformations.

[david]: https://david-dm.org/eush77/mdast-squeeze-paragraphs
[david-badge]: https://david-dm.org/eush77/mdast-squeeze-paragraphs.png

## Example

```js
> mdast.use(mdastStripBadges)
       .process('![](http://img.shields.io/)\n\ntext')
'\n\ntext\n'
> mdast.use(mdastStripBadges)
       .use(mdastSqueezeParagraphs)
       .process('![](http://img.shields.io/)\n\ntext')
'text\n'
```

## API

#### `mdast.use(mdastSqueezeParagraphs)`

Remove empty paragraphs from the AST.

## Install

```
npm install mdast-squeeze-paragraphs
```

## License

MIT
