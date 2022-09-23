const { Client } = require('pg')
const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT_DB,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});