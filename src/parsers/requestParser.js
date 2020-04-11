const mongodb = require('mongodb')

module.exports = () => (req, res, next) => {
    req.database = req.get('DATABASE')
    req.collection = req.get('COLLECTION')
    req.operation = req.get('OPERATION')
    req.query = req.body.hyperql ? req.body.hyperql.query || {} : {}
    req.projection = req.body.hyperql ? req.body.hyperql.projection || {} : {}
    req.pipeline = req.body.pipeline || []
    req.data = req.body.data
    if (req.query._id) {        
        req.query._id = mongodb.ObjectId(req.query._id)
    }
    next()
}
