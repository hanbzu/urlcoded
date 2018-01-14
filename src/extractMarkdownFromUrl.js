import atob from 'atob'
import pako from 'pako'

const extractMarkdownFromUrl = () =>
  new Promise((resolve, reject) => {
    try {
      const code = window.location.href.split('#')[1]
      const markdown = pako.ungzip(atob(code), { to: 'string' })
      resolve(markdown)
    } catch (e) {
      reject(e)
    }
  })

export default extractMarkdownFromUrl
