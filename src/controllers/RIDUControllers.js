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
    return collection.deleteMany(query)
}

module.exports.deleteOne = (db, col, query) => {
    const collection = hyperlite.getDB(db).collection(col)
    return collection.deleteOne(query)
}

module.exports.update = (db, col, query, data) => {
    const collection = hyperlite.getDB(db).collection(col)
    return collection.updateMany(query, {$set: data})
}

module.exports.updateOne = (db, col, query, data) => {
    const collection = hyperlite.getDB(db).collection(col)
    return collection.updateOne(query, {$set: data})
}

module.exports.pipeline = (db, col, pipeline) => {    
    const collection = hyperlite.getDB(db).collection(col)
    return collection.aggregate(pipeline)
}
