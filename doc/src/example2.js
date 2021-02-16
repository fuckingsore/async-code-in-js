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

generateNumber(function(err, res) {
    if (err) {
        throw err
    } else {
        console.log(`Result ${res} is correct`)
    }
})