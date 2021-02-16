function simpleDelay(callback) {
    setTimeout(function() {
        console.log('Actions after timeout...')
        callback()
    }, 2000)
}

console.log('Start')

simpleDelay(function() {
    console.log('Сallback-function actions...')
})

console.log('End')