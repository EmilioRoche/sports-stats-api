const express = require('express');
const app = express();
//const sports = require('./routes/sports');
const db = require('./services/db');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

db.connect();
//access to database
app.use(function(req, res, next){
    req.db = db;
    next();
});

app.use(cors());
app.use(express.json());
app.use('/',apiRoutes);



const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
});
    



    
