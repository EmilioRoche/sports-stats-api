const { MakeRequest } = require("../services/pg-promise");

function Serie() {
    MakeRequest('https://sportscore1.p.rapidapi.com/seasons/18977/standings-tables', 'serie_standings');
}
Serie();