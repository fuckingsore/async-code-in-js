const newSimpleDelay = require('../example13')

describe('Example №13 promise`s .race() method:', () => {

    test('return the value of the fastest promise', () => {
        Promise.race([
            newSimpleDelay(1000),
            newSimpleDelay(1500),
            newSimpleDelay(2000)
        ])
            .then(res => expect(res).toBe(1000))
    })

    test('catch & return an error when fastest promise rejected', () => {
        Promise.race([
            newSimpleDelay(4000),
            newSimpleDelay(3500),
            newSimpleDelay(2100)
        ])
            .catch(err => expect(err).toThrowError())
    })
})