const { MakeRequest } = require("../services/pg-promise");

function Laliga() {
    MakeRequest('https://sportscore1.p.rapidapi.com/seasons/18973/standings-tables', 'laliga_standings');
}
Laliga();