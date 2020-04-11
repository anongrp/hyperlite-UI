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
