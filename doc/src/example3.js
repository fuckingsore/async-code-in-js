// Callback обернений в callback
const fs = require('fs')

function getDataFromFile(path, callback) {
    fs.readFile(path, 'utf-8', (err, content) => {
        if (err) {
            callback(new Error('Oops...'))
        } 
        callback(null, +content)
    })
}

function processData(number, callback) {
    setTimeout(() => {
        const number2 = 50
        callback(null, number+number2)
    }, 1500)
}

getDataFromFile('./txt/test.txt', (err, res) => {
    if (err) {
        throw err
    } else {
        console.log(`Data in file: ${res}`)
        processData(res, (err2, res2) => {
            if (err2) {
                throw err2
            } else {
                console.log(`Processed data: ${res2}`)
            }
        })
    }
})