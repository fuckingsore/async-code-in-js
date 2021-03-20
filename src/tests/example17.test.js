const myReadFile = require('../example17')
const Promise = require('bluebird')
const path = require('path')

describe('Example №17 bluebird .map() method:', () => {

    test('create array of promises & return array of values', () => {
        const dirPath = path.join(__dirname, '/../', 'txt') 
        const filePaths = ['/test2.txt', '/test3.txt', '/test4.txt'].map(path => dirPath + path)

        Promise.map(filePaths, (path) => myReadFile(path, 'utf-8'))
            .then(res => expect(res).toEqual(['Text2', 'Text3', 'Text4']))

    })

    test('return an error when one promise rejected', () => {
        Promise.map(['not a path', 'unexisted one'], path => myReadFile(path, 'utf-8'))
            .catch(err => expect(err).toThrowError(/Operational Error/))
    })

})