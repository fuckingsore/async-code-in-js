// Бібліотека bluebird: основні функції
// `.map()`
const Promise = require('bluebird')

const fs = require('fs')
const myReadFile = Promise.promisify(fs.readFile)
const filePaths = ['./txt/test2.txt', './txt/test3.txt', './txt/test4.txt']
Promise.map(filePaths, (path) => myReadFile(path, 'utf-8'))
    .then(() => console.log('Done!'))