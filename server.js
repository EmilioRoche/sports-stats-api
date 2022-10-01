const express = require('express')
const app = express();
//const sports = require('./routes/sports');
const db = require('./services/db');
const premstandings = require('./routes/standings/premstandings');
const bundesstandings = require('./routes/standings/bundesstandings');
const ligastandings = require('./routes/standings/ligastandings');
const liguestandings = require('./routes/standings/liguestandings');
const seriestandings = require('./routes/standings/seriestandings');
const cplstandings = require('./routes/standings/cplstandings');
const prem = require('./routes/teams/prem');
const bundes = require('./routes/teams/bundes');
const liga = require('./routes/teams/liga');
const ligue = require('./routes/teams/ligue');
const serie = require('./routes/teams/serie');
const cpl = require('./routes/teams/cpl');
const leagues = require('./routes/leagues');
const cors = require('cors');

db.connect();
app.use(cors());
app.use(express.json());
/*we set it as default blank since we want it to load the sports list right away and will use this later on*/
//app.use('/',sports);
//standings
app.use('/Football/Prem', premstandings);
app.use('/Football/LaLiga', ligastandings);
app.use('/Football/Bundesliga', bundesstandings);
app.use('/Football/Ligue1', liguestandings);
app.use('/Football/CPL', cplstandings);
app.use('/Football/SerieA', seriestandings);

app.use('/Football/Leagues', leagues);

app.use('/Football/Prem/Teams', prem);
app.use('/Football/Bundesliga/Teams', bundes);
app.use('/Football/LaLiga/Teams', liga);
app.use('/Football/Ligue1/Teams', ligue);
app.use('/Football/SerieA/Teams', serie);
app.use('/Football/CPL/Teams', cpl);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
});
    



    
