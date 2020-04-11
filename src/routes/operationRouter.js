const express = require('express')

const router = express.Router()

router.post('/', (req, res, next) => {
    const {database, collection, query, data} = req
    console.log(database, collection, query, data)
    res.send(req.body)
})

module.exports = router
