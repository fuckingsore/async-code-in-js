const newSimpleDelay = require('../example6')

describe('Example №6 promise:', () => {

    test('reject when input time greater than 2000ms', () => {
        newSimpleDelay(2500).catch(err => expect(err.message).toMatch('We can`t wait so long!'))
    })

    test('resolve when input time less than (or equal) 2000ms', () => {
        newSimpleDelay(1500).then(data => expect(data).toBe('Success!'))
    })

})