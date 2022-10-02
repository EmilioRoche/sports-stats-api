const { MakeRequest } = require("../services/pg-promise");

function Ligue() {
    MakeRequest('https://sportscore1.p.rapidapi.com/seasons/18715/standings-tables', 'ligue_standings');
}
Ligue();