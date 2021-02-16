// Ланцюжок промісів
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

newSimpleDelay(2000)
    .then(res => newSimpleDelay(res - 100))
    .then(res => newSimpleDelay(res + 200))
    .catch(err => console.error(err))
    .finally(() => console.log('End'))