const express = require('express')
const RIDUController = require('../controllers/RIDUControllers')

const router = express.Router()

router.post('/', async (req, res, next) => {
    const {database, collection, operation, query, projection, data, pipeline} = req
    console.log(database, collection, operation, query, projection, data, pipeline)
    let result
    switch (operation) {
        case 'INSERT':
            result = data ? await RIDUController.insert(database, collection, data) : { message: "Nothing to Insert" }
            break

        case 'INSERT_MANY':
            result = data ? await RIDUController.insertMany(database, collection, data) : { message: "Nothing to Insert" }
            break
        
        case 'READ':
            result = await RIDUController.read(database, collection, query, projection)
            break

        case 'READ_ONE':
            result = await RIDUController.readOne(database, collection, query, projection)
            break
    
        case 'UPDATE':
            result = await RIDUController.update(database, collection, query, data)
            break

        case 'UPDATE_ONE':
            result = await RIDUController.updateOne(database, collection, query, data)
            break

        case 'DELETE':
            result = await RIDUController.delete(database, collection, query)
            break

        case 'DELETE_ONE':
            result = await RIDUController.deleteOne(database, collection, query)
            break

        case 'PIPELINE':
            result = await RIDUController.pipeline(database, collection, pipeline)
            break

        default:
            result = []
            break
    }
    res.json(result || {message: 'Operation Executed'})
})

module.exports = router
