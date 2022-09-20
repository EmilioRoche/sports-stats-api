const express = require('express')
const app = express();
const sports = require('./routes/sports');
const premstandings = require('./routes/premstandings');

app.use(express.json());

//we set it as default blank since we want it to load the sports list right away
app.use('/', sports);
app.use('/Football/Prem', premstandings);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
