// Ланцюжок промісів
function simpleCounter(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(number+1)
        }, 1000)
    })
}

simpleCounter(0)
    .then(res => {
        console.log(res)
        return res+1
    })
    .then(res => {
        console.log(res)
        return res+1
    })
    .then(res => {
        console.log(res)
        return res+1
    })
    .then(res => {
        console.log(res)
        return res+1
    })
    .then(res => {
        console.log(res)
    })