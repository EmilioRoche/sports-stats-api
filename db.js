require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

(async () => {
  try {
    await client.connect();
    await client.close();
  } catch (e) {
    console.log('Error: ', e.message);
  }
})();