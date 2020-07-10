const express = require('express')

const infoRouter = require('./info.js')

const router = express.Router()

router.use('/info', infoRouter)

module.exports = router
