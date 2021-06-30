const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
    MongoClient.connect('mongodb+srv://Sahil:Aa1cozRE7x10rZHM@cluster0.nt36a.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
        _db = client.db();
        cb();
    }).catch(err => console.log(err));
}

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'No connection found!';
}

module.exports = {
    mongoConnect: mongoConnect,
    getDb: getDb
};