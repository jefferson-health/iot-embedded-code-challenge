const router = require('express').Router()

router.use('/devices', require('./devices'))

module.exports = router