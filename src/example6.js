// Асинхронне програмування на промісах

/**
 * Waits for given amount of time.
 * @function newSimpleDelay
 * @param {number} time Time to wait in ms
 * @returns {Promise} Promise object represents end of delay
 */

/**
 * @example <caption>How to use neSimpleDelay</caption>
 * // without error
 * newSimpleDelay(1500).then(res => console.log(res))
 * // with error
 * newSimpleDelay(3000).catch(err => console.log(err))
 */

function newSimpleDelay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Actions after timeout...')
            if (time > 2000) {
                reject(new Error('We can`t wait so long!'))
            } else {
                resolve('Success!')
            }
            
        }, time)
    })
}

// newSimpleDelay(3000)

module.exports = newSimpleDelay