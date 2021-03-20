const {getDataFromFile, processData} = require('../example3')
const path = require('path')

describe('Example №3 callback in callback:', () => {

    let filepath

    beforeEach(() => {
        filepath = path.join(__dirname, '/../', 'txt/test.txt')
    })

    test('getDataFromFile result is 120', done => {

        function callback(err, data) {
            try {
                if (err) throw err
                else {
                    expect(data).toBe(120)
                    done()
                }
            } catch (error) {
                done(error)
            }
        }
        
        getDataFromFile(filepath, callback)

    })

    test('getDataFromFile + processData result is 170', done => {

        function callback2(err, data) {
            if (err) throw err
            else {
                expect(data).toBe(170)
                done()
            }
        }

        function callback1(err, data) {
            try {
                if (err) throw err
                else {
                    processData(data, callback2)
                }
            } catch (error) {
                
            }
        }

        getDataFromFile(filepath, callback1)
    })

})