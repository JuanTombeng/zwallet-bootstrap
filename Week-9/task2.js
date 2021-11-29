const displayMonth = (message, data) => {
    if (message === null) {
        return data.map((item) => {
            return `${data.indexOf(item) + 1} : ${item}`
        })
    } else {
        return message
    }
}

const getMonth = (callback) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let error = true
            let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            if (!error) {
                resolve(callback(null, month))
            } else {
                reject(callback(new Error (`Sorry Data Not Found`)), [])
            }
        }, 4000)
    })
}

getMonth(displayMonth).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})