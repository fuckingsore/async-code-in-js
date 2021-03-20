const myReadFile = require('../example16')
const path = require('path')
const Promise = require('bluebird')

describe('Example №16 bluebird .spread() method:', () => {
    test('spread the array of promise`s results', () => {

        const dirPath = path.join(__dirname, '/../', 'txt') 

        Promise.all([
            myReadFile(dirPath + '/test2.txt', 'utf-8'),
            myReadFile(dirPath + '/test3.txt', 'utf-8'),
            myReadFile(dirPath + '/test4.txt', 'utf-8')
        ])
            .spread((text2, text3, text4) => {
                expect(text2).toMatch('Text2')
                expect(text3).toMatch('Text3')
                expect(text4).toMatch('Text4')
        })
    })
})