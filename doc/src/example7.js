// Обробка результатів та помилок у промісах: then, catch, finally
// `.then()` без обробки помилок, та з нею.

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

newSimpleDelay(2000).then(res => console.log(res))
newSimpleDelay(3000).then(res => console.log(res), err => console.error(err))