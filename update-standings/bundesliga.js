const {MakeRequest} = require('../services/pg-promise');

const Bundesliga = () => {
    MakeRequest('https://sportscore1.p.rapidapi.com/seasons/18717/standings-tables', 'bundesliga_standings');
}
Bundesliga();
