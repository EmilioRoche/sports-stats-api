const express = require('express')
const app = express();
const sports = require('./routes/sports');
const premstandings = require('./routes/premstandings');
const bundesstandings = require('./routes/bundesstandings');
const ligastandings = require('./routes/ligastandings');
const liguestandings = require('./routes/liguestandings');
const seriestandings = require('./routes/seriestandings');
const cplstandings = require('./routes/cplstandings');
const db = require("./db");
const cors = require('cors');

app.use(express.json());
app.use(cors());
//we set it as default blank since we want it to load the sports list right away
app.use('/', sports);
app.use('/Football/Prem', premstandings);
app.use('/Football/LaLiga', ligastandings);
app.use('/Football/Bundesliga', bundesstandings);
app.use('/Football/Ligue1', liguestandings);
app.use('/Football/CPL', cplstandings);
app.use('/Football/SerieA', seriestandings);


const port = process.env.PORT || 3001;
db.connect(() => {
    app.listen(port, () => {
        console.log(`Listening on Port: ${port}`)
    });
})
    



    
