const express = require('express')
const app = express();
const sports = require('./routes/sports');

app.use(express.json());

//we set it as default blank since we want it to load the sports list right away
app.use('/', sports);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
