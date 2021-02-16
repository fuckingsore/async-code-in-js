// Callback Hell
 function simpleDelay(arg, callback) {
    setTimeout(() => {
        arg ++
        callback(null, arg)
    }, 1000)
}

simpleDelay(0, (err, res) => {
    if (err) {
        throw err
    } else {
        console.log(res)
        simpleDelay(res, (err2, res2) => {
            if (err2) {
                throw err2
            } else {
                console.log(res2)
                simpleDelay(res2, (err3, res3) => {
                    if (err3) {
                        throw err3
                    } else {
                        console.log(res3)
                        simpleDelay(res3, (err4, res4) => {
                            if (err4) {
                                throw err4
                            } else {
                                console.log(res4)
                            }
                        })
                    }
                })
            }
        })
    }
})