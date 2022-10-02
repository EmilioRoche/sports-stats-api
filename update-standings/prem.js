const { MakeRequest } = require("../services/pg-promise");

function Prem() {
    MakeRequest('https://sportscore1.p.rapidapi.com/seasons/18686/standings-tables', 'prem_standings');
}
Prem();