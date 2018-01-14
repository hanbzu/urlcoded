const pako = require('pako')
const fs = require('fs')
const atob = require('atob')
const btoa = require('btoa')
const ncp = require('copy-paste')

const path = process.argv[2]
if (path === undefined) {
  throw new Error('You need to specify the location of the markdown file to be zipped!')
}

const markdown = fs.readFileSync(path, 'utf8')
const compressedAndBase64encoded = btoa(pako.gzip(markdown, { to: 'string' }))
ncp.copy(compressedAndBase64encoded)

console.log('Code copied to clipboard!')
