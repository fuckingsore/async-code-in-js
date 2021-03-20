const newSimpleDelay = require('../example10')

describe('Example №10 chain of promises:', () => {

    test('catch error on 3-rd step of chain with 3 methods', () => {
        newSimpleDelay(2000)
            .then(res => newSimpleDelay(res - 100))
            .then(res => newSimpleDelay(res + 200))
            .catch(err => expect(err).toThrowError('We can`t wait so long!'))
        })

    test('resolve with correct values in chain of 2 .then()', () => {
        newSimpleDelay(2000)
            .then(res => {
                expect(res).toBe(2000)
                expect(newSimpleDelay(res - 100)).toBeInstanceOf(Promise)
            })
            .then(res => {
                expect(res).toBe(1900)
                expect(newSimpleDelay(res - 200)).toBeInstanceOf(Promise)
            })
    })

})