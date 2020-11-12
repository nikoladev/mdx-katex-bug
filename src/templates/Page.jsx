import React from 'react'

import 'katex/dist/katex.css'

export default function PageTemplate ({ pageContext, location, children }) {
  return (
    <article
      style={{
        margin: '0 auto',
        maxWidth: '40rem',
      }}
    >
      {children}
    </article>
  )
}
