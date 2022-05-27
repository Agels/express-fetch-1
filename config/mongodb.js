const {MongoClient} = require('mongodb');


const url = `mongodb://admin:admin@localhost:27017?authSource=admin`;

const client = new MongoClient(url);

const db = client.db('expressMongo');
(async ()=> {
    try{
        await client.connect();
        console.log('connection successfully')
    } catch(err){
        console.log(err)
    }
})();

module.exports = db;