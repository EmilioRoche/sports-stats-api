const { MakeRequest } = require("../services/pg-promise");

function CPL() {
    MakeRequest('https://sportscore1.p.rapidapi.com/seasons/15265/standings-tables', 'cpl_standings');
}
CPL();
