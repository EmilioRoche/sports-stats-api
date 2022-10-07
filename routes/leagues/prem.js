const express = require('express');
const router = express.Router();
const db = require('../../services/db');

router.get('/Standings', async function(req, res) { 
    try {
        //put the db query into a service and this file into routes
        let response = await db.query(`SELECT * FROM prem_standings ORDER BY position ASC;`);
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
    }

});
router.get('/Teams', async function(req, res) { 
    try {
        //put the db query into a service and this file into routes
        let response = await db.query(`SELECT * FROM team WHERE league_id=317 ORDER BY name ASC;`);
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
    }

});
router.get('/Teams/:name', async function(req, res) { 
    try {
        const name = req.params.name;
        //put the db query into a service and this file into routes
        var sql = "SELECT * FROM team WHERE team_id = " + name + " ORDER BY name ASC;"
        let response = await db.query(sql);
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
    }

});
module.exports = router;