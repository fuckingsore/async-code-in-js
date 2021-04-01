/**
 * Simple callback with one arg. 
 * @callback simpleCallback
 * @param {*} value Value to return
 */

/**
 * This function asynchrnously prints out the strings.
 * @function simpleDelay  
 * @param {Array} array - An empty array that will be filled with printed strings 
 * @param {simpleCallback} callback Callback function that will be called inside function  
 */

/**
 * @example <caption>How to use simpleDelay function</caption>
 *simpleDelay([], function(array) {
 *    console.log('Сallback-function actions...')
 *    array.push('Сallback-function actions...')
 *    console.log(array)
 *})
 */

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

module.exports = simpleDelay