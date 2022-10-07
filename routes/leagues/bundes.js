const express = require('express');
const router = express.Router();
const db = require('../../services/db');

router.get('/Standings', async function(req, res) { 
    try {
        //put the db query into a service and this file into routes
        let response = await db.query(`SELECT * FROM bundesliga_standings ORDER BY position ASC;`);
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
    }

});
router.get('/Teams', async function(req, res) { 
    try {
        //put the db query into a service and this file into routes
        let response = await db.query(`SELECT * FROM team WHERE league_id=512 ORDER BY name ASC;`);
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
    }

});
router.get('/Teams/:id', async function(req, res) { 
    try {
        const id = req.params.id;
        //put the db query into a service and this file into routes
        var sql = "SELECT * FROM team WHERE team_id = " + id + " ORDER BY name ASC;"
        let response = await db.query(sql);
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
    }

});
module.exports = router;