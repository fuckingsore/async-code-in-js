// Асинхронне програмування на промісах
function newSimpleDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Actions after timeout...')
            resolve()
        }, 2000)
    })
}
newSimpleDelay()