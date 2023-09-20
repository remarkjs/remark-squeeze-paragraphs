/**
 * @typedef {import('mdast').Root} Root
 */

import {squeezeParagraphs} from 'mdast-squeeze-paragraphs'

/**
 * Remove empty (or white space only) paragraphs.
 *
 * @returns
 *   Transform.
 */
export default function remarkSqueezeParagraphs() {
  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree) {
    squeezeParagraphs(tree)
  }
}
