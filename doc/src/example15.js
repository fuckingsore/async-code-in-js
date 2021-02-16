// Бібліотека bluebird: основні функції
// `Promise.promisifyAll()`
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))

fs.readFileAsync('./txt/test.txt', 'utf-8')
    .then(res => console.log(res))
    .catch(err => console.error(err))
