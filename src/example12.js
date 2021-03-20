// Методи промісів 
// `.all()`
function newSimpleDelay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Actions after timeout...')
            if (time > 2000) {
                reject(new Error('We can`t wait so long!'))
            } else {
                resolve(time)
            }
            
        }, time)
    })
}

// Promise.all([
//     newSimpleDelay(1000),
//     newSimpleDelay(1500),
//     newSimpleDelay(2000)
//     ])
//     .then(res => console.log(`Result: ${res}.`))

// Promise.all([
//     newSimpleDelay(2100),
//     newSimpleDelay(2200),
//     newSimpleDelay(2000)
//     ])
//     .catch(err => console.log(err))

module.exports = newSimpleDelay