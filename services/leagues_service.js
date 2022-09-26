const db = require('./db');

db.query(`SELECT * FROM football_leagues;`, (err, res) => {
    if (err) {
        console.log("Error - Failed to select all from Football Leagues");
        console.log(err);
    }
    else{
        console.log(res.rows);
    }
});
module.exports = db;