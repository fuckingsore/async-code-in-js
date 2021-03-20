// В функцію було додано роботу з масивом
// задля перевірки послідовності виконання операцій виводу тексту під час тестування

function simpleDelay(array, callback) {
    console.log('Start')
    array.push('Start')

    setTimeout(function() {
        console.log('Actions after timeout...')
        array.push('Actions after timeout...')
        callback(array)
    }, 2000)

    console.log('End')
    array.push('End')
    
}

// const arr = []
// simpleDelay(arr, function(array) {
//     console.log('Сallback-function actions...')
//     array.push('Сallback-function actions...')
//     console.log(array)
// })

module.exports = simpleDelay