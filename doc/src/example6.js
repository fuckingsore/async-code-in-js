// Асинхронне програмування на промісах
function newSimpleDelay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Actions after timeout...')
            if (time > 2000) {
                reject(new Error('We can`t wait so long!'))
            } else {
                resolve()
            }
            
        }, time)
    })
}
newSimpleDelay(3000)