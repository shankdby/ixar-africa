import React from 'react';

/**
 * Inline <style> block that survives server rendering.
 *
 * React escapes text children, so a plain `<style>{`...`}</style>` comes out of
 * renderToString with its CSS mangled - `a > b` becomes `a &gt; b`,
 * `content: ''` becomes `content: &#x27;&#x27;`. That breaks the rules in the
 * static HTML *and* causes a hydration mismatch, because the browser DOM holds
 * the unescaped text. Passing the CSS through dangerouslySetInnerHTML is the
 * supported way to emit a style block verbatim.
 *
 * Use this instead of a bare <style> tag anywhere in the component tree.
 */
export default function Style({ children }) {
  return <style dangerouslySetInnerHTML={{ __html: String(children) }} />;
}
