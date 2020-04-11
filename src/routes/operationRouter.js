const express = require('express')
const RIDUController = require('../controllers/RIDUControllers')

const router = express.Router()

router.post('/', async (req, res, next) => {
    const {database, collection, operation, query, projection, data} = req
    console.log(database, collection, operation, query, projection, data)
    let result
    switch (operation) {
        case 'INSERT':
            result = data ? await RIDUController.insert(database, collection, data) : { message: "Nothing to Insert" }
            break;

        case 'INSERT_MANY':
            result = data ? await RIDUController.insertMany(database, collection, data) : { message: "Nothing to Insert" }
            break;
        
        case 'READ':
            result = await RIDUController.read(database, collection, query, projection)
            break;

        case 'READ_ONE':
            result = await RIDUController.readOne(database, collection, query, projection)
            break;
    
        default:
            result = []
            break;
    }
    res.json(result)
})

module.exports = router
