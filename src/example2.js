/**
 * Error-first callback.
 * @callback commonCallback
 * @param {Error} error Error that will be thrown
 * @param {*} value Value to return
 */

/**
 * Generates random number from 0 to 1. 
 * If number greater than 0.5 executes callback with the number. 
 * Otherwise executes callback with an error.
 * @function generateNumber
 * @param {commonCallback} callback Callback function that will be executed inside
 */

/**
 * @example <caption>How to use generateNumber</caption>
 * generateNumber(function(err, res) {
 *     if (err) throw err
 *     else console.log(res)
 * })
 */

function generateNumber(callback) {
    setTimeout(function() {
        const number = Math.random()
        console.log(`User's input is ${number}`)
        if (number > 0.5) {
            callback(null, number)
        } else {
            callback(new Error('Incorrect input: number is lower than 0.5!'))
        }
    }, 1500)
}

// generateNumber(function(err, res) {
//     if (err) {
//         throw err
//     } else {
//         console.log(`Result ${res} is correct`)
//     }
// })
