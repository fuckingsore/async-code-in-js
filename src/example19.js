// Бібліотека bluebird: основні функції
// `.delay()`
const Promise = require('bluebird')

Promise.delay(1000)
    .then(() => {
        console.log('After 1 sec delay')
        return '1.5 sec later...'
    })
    .delay(500).then(res => console.log(res))