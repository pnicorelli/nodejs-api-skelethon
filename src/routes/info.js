const express = require('express')
const packageJson = require('../../package.json')

const router = express.Router()

router.get('/status', (req, res) => {
    res.send({
        app: packageJson.name,
        version: packageJson.version
    })
})

module.exports = router
