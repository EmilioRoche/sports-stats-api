const express = require('express')
const app = express();
//const sports = require('./routes/sports');
const db = require('./services/db');

const prem = require('./routes/leagues/prem');
const bundes = require('./routes/leagues/bundes');
const liga = require('./routes/leagues/liga');
const ligue = require('./routes/leagues/ligue');
const serie = require('./routes/leagues/serie');
const cpl = require('./routes/leagues/cpl');
const leagues = require('./routes/leagues');
const cors = require('cors');

db.connect();
app.use(cors());
app.use(express.json());
/*we set it as default blank since we want it to load the sports list right away and will use this later on*/
//app.use('/',sports);
//standings
app.use('/Football/Prem', prem);
app.use('/Football/LaLiga', liga);
app.use('/Football/Bundesliga', bundes);
app.use('/Football/Ligue1', ligue);
app.use('/Football/CPL', cpl);
app.use('/Football/SerieA', serie);
app.use('/Football/Leagues', leagues);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
});
    



    
