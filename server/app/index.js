const express = require('express')()
const {port} = require('config').http

express.use(require('./router'))

express.listen(port, (err) => {
    if (err) throw err
    console.log(`http:start ${port}`)
})

let isShuttingDown = false

process.on('uncaughtException', (err) => {
    console.log(`proccess.uncaughtException ${err}`)
    process.emit('SIGINT')
})

process.on('exit', () => {
    log.info('process.exit')

    setTimeout(() => process.exit(), 3000)
})

process.on('SIGINT', () => {
    console.log('process.SIGINT', { force: isShuttingDown})

    if(!isShuttingDown) {
        isShuttingDown = true
        process.emit('exit')
    }
})