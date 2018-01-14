import React, { createElement } from 'react'
import marksy from 'marksy'

const compileMarkdown = marksy({
  // Pass in whatever creates elements for your
  // virtual DOM library. h('h1', {})
  createElement

  // You can override the default elements with
  // custom VDOM trees
  // elements: {
  //   h1({ id, children }) {
  //     return <h1 className="my-custom-class">{children}</h1>
  //   },
  //   h2({ id, children }) {},
  //   h3({ id, children }) {},
  //   h4({ id, children }) {},
  //   blockquote({ children }) {},
  //   hr() {},
  //   ol({ children }) {},
  //   ul({ children }) {},
  //   p({ children }) {},
  //   table({ children }) {},
  //   thead({ children }) {},
  //   tbody({ children }) {},
  //   tr({ children }) {},
  //   th({ children }) {},
  //   td({ children }) {},
  //   a({ href, title, target, children }) {},
  //   strong({ children }) {},
  //   em({ children }) {},
  //   br() {},
  //   del({ children }) {},
  //   img({ src, alt }) {},
  //   code({ language, code }) {},
  //   codespan({ children }) {}
  // }
})

export default compileMarkdown
