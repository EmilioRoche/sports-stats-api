const express = require('express')
const app = express();
const sports = require('./routes/sports');

app.use(express.json());

app.use('/sports', sports);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
