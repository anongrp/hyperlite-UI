const MongoClient = require('mongodb').MongoClient

let _client

module.exports = {
    init: (cb) => {
        MongoClient.connect('mongodb://localhost:27017', (err, client) => {
            if (!err) {
                _client = client
            }
            cb(err)
        })
    },
    dispose: () => {
        _client.close()
        console.log('Connection Disposed!')
    },
    client: () => _client
}
