const myReadFile = require('../src/example18')
const Promise = require('bluebird')
const path = require('path')

describe('Example №18 bluebird .any() method:', () => {

    test('return first resolved promise with it`s value', () => {
        const dirPath = path.join(__dirname, '/../', 'src/txt') 
        const filePaths = ['/test2.txt', '/test3.txt', '/test4.txt'].map(path => dirPath + path)

        const promises = Promise.map(filePaths, (path) => myReadFile(path, 'utf-8'))

        Promise.any(promises).then(res => expect(res).toMatch('Text2'))
    })

})