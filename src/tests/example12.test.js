const newSimpleDelay = require('../example12')

describe('Example №12 promise`s method .all:', () => {

    test('resolve an array of results', () => {
        Promise.all([
            newSimpleDelay(1000),
            newSimpleDelay(1500),
            newSimpleDelay(2000)
        ])
            .then(res => {
                expect(res).toMatchObject(Array)
                expect(res).toEqual([1000, 1500, 2000])
            })
    })

    test('catch & return an error if at least 1 promise rejected', () => {
        Promise.all([
            newSimpleDelay(2100),
            newSimpleDelay(2000),
            newSimpleDelay(1500)
        ])
            .catch(err => expect(err).toThrowError())
    })

})