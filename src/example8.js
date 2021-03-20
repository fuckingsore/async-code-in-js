// Обробка результатів та помилок у промісах: then, catch, finally
// `.catch()`

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
newSimpleDelay(3000).catch(err => console.error(err))