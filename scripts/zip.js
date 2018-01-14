const pako = require('pako')
const fs = require('fs')
const atob = require('atob')
const btoa = require('btoa')
const ncp = require('copy-paste')

const MAX_URL_LENGTH = 2000
const GUESSED_ROOT_URL_LENGTH = 20

const path = process.argv[2]
if (path === undefined) {
  throw new Error('You need to specify the location of the markdown file to be zipped!')
}

const markdown = fs.readFileSync(path, 'utf8')
const compressedAndBase64encoded = btoa(pako.gzip(markdown, { to: 'string' }))
ncp.copy(compressedAndBase64encoded)

console.log(`${compressedAndBase64encoded.length} chars. Code copied to clipboard!`)
if (compressedAndBase64encoded.length > MAX_URL_LENGTH - GUESSED_ROOT_URL_LENGTH) {
  console.error('This code is so large that will very likely produce an invalid URL!')
}
