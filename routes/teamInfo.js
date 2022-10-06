const db = require('../services/db');
const express = require('express');
const router = express.Router();

//db.connect();
router.get('/', async function(req, res) { 
    try {
        //put the db query into a service and this file into routes
        let response = await db.query(`SELECT * FROM team;`);
        //res.send(response.rows);
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
    }

});
/*
router.get('/:id', async function(req, res) { 
    try {
        const id  = req.params.id;
        console.log(id);
        var response = await db.query('SELECT * from team;');
        //let response = await db.query(sql, id, function(err, rows, fields){});
        const foundTeam = response.rows.find((team) => team.id == id);
        res.send(foundTeam);
        //res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
    }

});
*/
module.exports = router;