
const axios = require("axios");
require('dotenv').config();
const pgp = require('pg-promise')({
    capSQL: true // capitalize all generated SQL
});
const cn = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },     
};
const db = pgp(cn);

async function MakeRequest(urlReturn, tableName) {
    const options = {
		method: 'GET',
        url: urlReturn,
		headers: {
			'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com',
			'X-RapidAPI-Key': process.env.API_KEY
		}
	};
    let res = await axios(options);
	let teams = res.data.data[0].standings_rows;
	var arr = [];
	teams.map((element) => {
        arr.push({
            name: element.team.name,
            draws: Number(element.fields.draws_total),
            goal_diff: element.fields.score_diff_formatted_total,
            losses: Number(element.fields.losses_total),
            matches: Number(element.fields.matches_total),
            points: Number(element.fields.points_total),
            position: element.position,
            wins: Number(element.fields.wins_total)
        });
    });
    const cs = new pgp.helpers.ColumnSet(['?name', 'draws', 'goal_diff', 'losses', 'matches', 'points', 'position', 'wins'], {table: tableName});
    const update = pgp.helpers.update(arr, cs) + ' WHERE t.name = v.name';
    await db.none(update);
	pgp.end();
}
module.exports = {MakeRequest};