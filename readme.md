# remark-squeeze-paragraphs

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[remark][]** plugin to remove empty (or white space only) paragraphs.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`unified().use(remarkSqueezeParagraphs)`](#unifieduseremarksqueezeparagraphs)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a [unified][] ([remark][]) plugin that removes empty paragraphs,
left over from other operations, from the tree.
Paragraphs are considered empty if they do not contain non-whitespace
characters.

## When should I use this?

This project is mostly useful when you’re using other plugins that remove things
from the AST (such as [`remark-strip-badges`][remark-strip-badges]).
You can then use this plugin afterwards to clean stray empty paragraphs.

> 👉 **Note**: this plugin used to be useful, but with time the responsibility
> for cleaning the tree has shifted to the plugins that cause that.
>
> If you need this, you should also open an issue with the tools causing that.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install remark-squeeze-paragraphs
```

In Deno with [`esm.sh`][esmsh]:

```js
import remarkSqueezeParagraphs from 'https://esm.sh/remark-squeeze-paragraphs@5'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import remarkSqueezeParagraphs from 'https://esm.sh/remark-squeeze-paragraphs@5?bundle'
</script>
```

## Use

```js
import {remark} from 'remark'
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs'
import remarkStripBadges from 'remark-strip-badges'

console.log(
  String(
    await remark()
      .use(remarkStripBadges)
      .process('![](https://img.shields.io/)\n\ntext')
  )
)
// => '\n\ntext\n'

console.log(
  String(
    await remark()
      .use(remarkStripBadges)
      .use(remarkSqueezeParagraphs)
      .process('![](https://img.shields.io/)\n\ntext')
  )
)
// => 'text\n'
```

## API

This package exports no identifiers.
The default export is
[`remarkSqueezeParagraphs`][api-remark-squeeze-paragraphs].

### `unified().use(remarkSqueezeParagraphs)`

Remove empty (or white space only) paragraphs.

###### Parameters

There are no parameters.

###### Returns

Transform ([`Transformer`][unified-transformer]).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`remark-squeeze-paragraphs@^5`, compatible with Node.js 12.

This plugin works with `unified` version 3+ and `remark` version 4+.

## Security

Use of `remark-squeeze-paragraphs` does not involve **[rehype][]**
(**[hast][]**) or user content so there are no openings for [cross-site
scripting (XSS)][wiki-xss] attacks.

## Related

*   [`mdast-squeeze-paragraphs`][mdast-squeeze-paragraphs]
    — mdast utility with similar functionality

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

[size-badge]: https://img.shields.io/bundlejs/size/remark-squeeze-paragraphs

[size]: https://bundlejs.com/?q=remark-squeeze-paragraphs

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/main/contributing.md

[support]: https://github.com/remarkjs/.github/blob/main/support.md

[coc]: https://github.com/remarkjs/.github/blob/main/code-of-conduct.md

[license]: license

[remark]: https://github.com/remarkjs/remark

[hast]: https://github.com/syntax-tree/hast

[mdast-squeeze-paragraphs]: https://github.com/syntax-tree/mdast-squeeze-paragraphs

[rehype]: https://github.com/rehypejs/rehype

[remark-strip-badges]: https://github.com/remarkjs/remark-strip-badges

[unified]: https://github.com/unifiedjs/unified

[unified-transformer]: https://github.com/unifiedjs/unified#transformer

[typescript]: https://www.typescriptlang.org

[wiki-xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[api-remark-squeeze-paragraphs]: #unifieduseremarksqueezeparagraphs
