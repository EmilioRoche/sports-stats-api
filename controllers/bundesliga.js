const db = require('../services/db');

const standings = async (req, res, next) => {
    try {
        //put the db query into a service and this file into routes
        let response = await db.query(`SELECT * FROM bundesliga_standings ORDER BY position ASC;`);
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
        next();
    }
};

const teams = async (req, res, next) => {
    try {
        //put the db query into a service and this file into routes
        let response = await db.query(`SELECT * FROM team WHERE league_id=512 ORDER BY team_name ASC;`);
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
        next();
    }
};

const teamName = async (req, res, next) => {
    try {
        const name = req.params.name;
        //put the db query into a service and this file into routes
        var sql = "SELECT * FROM team WHERE team_id = " + name + ";"
        let response = await db.query(sql);
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});
        next();
    }
};

const teamPlayers = async (req, res, next) => {
    try {
        const name = req.params.name;
        //put the db query into a service and this file into routes
        var sql = "SELECT * FROM player WHERE team_id = " + name + ";"
        let response = await db.query(sql);
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
        next();
    }

};

module.exports = {standings, teams, teamName, teamPlayers};