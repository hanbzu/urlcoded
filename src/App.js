import React from 'react'
import atob from 'atob'
import pako from 'pako'
import compileMarkdown from './compileMarkdown'

const code = window.location.href.split('#')[1] || ''
console.log('code', code)

const markdown = pako.ungzip(atob(code), { to: 'string' })
const compiled = compileMarkdown(markdown)

const App = () => (
  <div style={{ margin: '8% 20%' }}>
    <div>{compiled.tree}</div>
  </div>
)

export default App
