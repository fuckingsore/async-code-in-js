
// Обробка результатів та помилок у промісах: then, catch, finally
// `.finally()`

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
newSimpleDelay(2000).finally(() => console.log('End of the first promise'))
newSimpleDelay(3000).finally(() => console.log('End of the second promise'))