import React from 'react'
import katex from 'katex'

export function KatexBlock ({ formula }) {
  const htmlStr = katex.renderToString(formula, {
    displayMode: true,
  })
  return (
    <div
      className='math math-display'
      dangerouslySetInnerHTML={{ __html: htmlStr }}
    />
  )
}

export function KatexInline ({ formula }) {
  const htmlStr = katex.renderToString(formula)
  return (
    <span
      className='math math-inline'
      dangerouslySetInnerHTML={{ __html: htmlStr }}
    />
  )
}
