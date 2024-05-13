const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';
const databaseName='need-help'
const client= new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return db.collection('need-help');
  
}
module.exports= dbConnect;