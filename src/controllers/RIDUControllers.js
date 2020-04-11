const hyperlite = require('../utils/db')

module.exports.readOne = (db, col, query, projection) => {
    const collection = hyperlite.getDB(db).collection(col)
    return collection.findOne(query, projection)
}

module.exports.read = (db, col, query, projection) => {
    const collection = hyperlite.getDB(db).collection(col)
    return collection.find(query, projection).toArray()
}

module.exports.insert = (db, col, data) => {
    const collection = hyperlite.getDB(db).collection(col)
    return collection.insert(data)
}

module.exports.insertMany = (db, col, data) => {
    const collection = hyperlite.getDB(db).collection(col)
    return collection.insertMany(data)
}

module.exports.delete = (db, col, query) => {
    const collection = hyperlite.getDB(db).collection(col)
    return collection.delete(query)
}

module.exports.deleteMany = (db, col, query) => {
    const collection = hyperlite.getDB(db).collection(col)
    return collection.deleteMany(query)
}

module.exports.update = (db, col, query, data) => {
    const collection = hyperlite.getDB(db).collection(col)
    return collection.update(query, data)
}

module.exports.updateMany = (db, col, query, data) => {
    const collection = hyperlite.getDB(db).collection(col)
    return collection.updateMany(query, data)
}

module.exports.pipeline = (db, col, pipeline) => {
    const collection = hyperlite.getDB(db).collection(col)
    return collection.aggregate(pipeline)
}
