// Бібліотека bluebird: основні функції
// `.any()`
const Promise = require('bluebird')
const fs = require('fs')

const filePaths = ['./txt/test2.txt', './txt/test3.txt', './txt/test4.txt']
const myReadFile = Promise.promisify(fs.readFile)
const promises = Promise.map(filePaths, (path) => myReadFile(path, 'utf-8'))
Promise.any(promises).then(res => console.log(res))