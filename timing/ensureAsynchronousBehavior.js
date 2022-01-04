function readFile(fileName, callback) {

    if (typeof fileName !== 'string') {
        return process.nextTick(
            callback, 
            new TypeError('file name should be string')
        )
    }

    fs.readFile(fileName, (err, data) => {
        if (err) return callback(err)

        return callback(null, data)
    })
}