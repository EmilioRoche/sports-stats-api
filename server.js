const express = require('express')
const app = express();
const sports = require('./routes/sports');
const premstandings = require('./routes/premstandings');
const bundesstandings = require('./routes/bundesstandings');
const ligastandings = require('./routes/ligastandings');
const liguestandings = require('./routes/liguestandings');
const seriestandings = require('./routes/seriestandings');
const cplstandings = require('./routes/cplstandings');
const cors = require('cors');

app.use(cors());
app.use(express.json());
//we set it as default blank since we want it to load the sports list right away
// will use this later on
//app.use('/', sports);
app.use('/Football/Prem', premstandings);
app.use('/Football/LaLiga', ligastandings);
app.use('/Football/Bundesliga', bundesstandings);
app.use('/Football/Ligue1', liguestandings);
app.use('/Football/CPL', cplstandings);
app.use('/Football/SerieA', seriestandings);


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
});
    



    
