const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const errorHandler = require('./middlewares/error-handler')
const apiRouter = require('./routes')
const packageJson = require('../package.json')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

app.use(morgan('combined'))

app.use('/', apiRouter)

app.use(errorHandler.handleNotFound)
app.use(errorHandler.handleError)

exports.start = () => {
    /* eslint no-console: 0 */
    app.listen(process.env.NODE_PORT, (err) => {
        if (err) {
            console.log(`Error : ${err}`)
            process.exit(-1)
        }
        console.log(
            `${packageJson.name} v${packageJson.version} is running on port ${process.env.NODE_PORT} [${process.env.NODE_ENV}]`
        )
    })
}

exports.app = app
