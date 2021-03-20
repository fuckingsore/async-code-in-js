// Бібліотека bluebird: основні функції
// `.spread()`
const Promise = require('bluebird')
const fs = require('fs')
const myReadFile = Promise.promisify(fs.readFile)

// Promise.all([
//     myReadFile('./txt/test2.txt', 'utf-8'),
//     myReadFile('./txt/test3.txt', 'utf-8'),
//     myReadFile('./txt/test4.txt', 'utf-8')
// ])
//     .spread((text2, text3, text4) => {
//         console.log(`test2.txt: ${text2}`)
//         console.log(`test3.txt: ${text3}`)
//         console.log(`test4.txt: ${text4}`)
// })

module.exports = myReadFile