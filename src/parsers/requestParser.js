
module.exports = () => (req, res, next) => {
    req.database = req.get('DATABASE')
    req.collection = req.get('COLLECTION')
    req.operation = req.get('OPERATION')
    req.query = req.body.hyperql ? req.body.hyperql.query : {}
    req.projection = req.body.hyperql ? req.body.hyperql.projection : {}
    req.data = req.body.data
    next()
}
