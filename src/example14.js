// Бібліотека bluebird: основні функції
// `Promise.promisify()`
const Promise = require('bluebird')
const fs = require('fs')

const readFile = Promise.promisify(fs.readFile)
readFile('./txt/test.txt', 'utf-8')
    .then(res => console.log(res))
    .catch(err => console.error(err))