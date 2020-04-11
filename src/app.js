const express = require('express')
const bodyParser = require('body-parser')
const cors = require('./utils/cors')
const requestParser = require('./parsers/requestParser')
const db = require('./utils/db')

const operationRouter = require('./routes/operationRouter')

const app = express()

app.use(bodyParser.json())

app.use(cors())

app.use(requestParser())

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Hyperlite'
    })
})

app.use('/run', operationRouter)

app.use((err, req, res, next) => {
    console.log(err.message)
    const status = err.statusCode || 500
    const msg = err.message
    const data = err.data
    res.status(status).json({
        msg,
        data
    })
})

db.init((err) => {
    if (err) {
        console.log('Enable to connect Database')
        console.error(err)
        process.exit(1)
    }
    console.log('Database Initialized')
    app.listen(3000, () => {
        console.log(`Hyperlite is listening on port ${3000}`)
    })
})

process.on('exit', () => {
    db.dispose()
})

process.on('SIGINT', () => {
    process.exit(0)
})

process.on('uncaughtException', () => {
    process.exit(1)
})
