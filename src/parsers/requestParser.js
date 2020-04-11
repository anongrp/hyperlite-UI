
module.exports = () => (req, res, next) => {
    req.database = req.get('DATABASE')
    req.collection = req.get('COLLECTION')
    req.operation = req.get('OPERATION')
    req.query = req.body.query
    req.data = req.body.data
    next()
}
