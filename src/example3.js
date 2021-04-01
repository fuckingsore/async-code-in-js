// Callback обернений в callback
const fs = require('fs')

/**
 * Reads data from given file.
 * @function getDataFromFile
 * @param {string} path Path to the file
 * @param {commonCallback} callback Callback function that will be executed inside
 */

/**
 * @example <caption>How to use getDataFromFile</caption>
 * getDataFromFile('./txt/test.txt', (err, res) => {
 *     if (err) throw err
 *     else console.log(res)
 * })
 */

function getDataFromFile(path, callback) {
    fs.readFile(path, 'utf-8', (err, content) => {
        if (err) {
            callback(new Error(err))
        } 
        callback(null, +content)
    })
}

/**
 * Simulates asynchronous processing of data
 * and add 50 to given number.  
 * @function processData
 * @param {number} number Number to process
 * @param {commonCallback} callback Callback function that will be executed inside
 */

/**
 * @example <caption>How to use processData</caption>
 * processData(50, (err, res) => {
 *     if (err) throw err
 *     else console.log(res)
 * })
 */

function processData(number, callback) {
    setTimeout(() => {
        const number2 = 50
        callback(null, number+number2)
    }, 1500)
}

// getDataFromFile('./txt/test.txt', (err, res) => {
//     if (err) {
//         throw err
//     } else {
//         console.log(`Data in file: ${res}`)
//         processData(res, (err2, res2) => {
//             if (err2) {
//                 throw err2
//             } else {
//                 console.log(`Processed data: ${res2}`)
//             }
//         })
//     }
// })

module.exports = {getDataFromFile, processData}