const db = require('../services/db');
const express = require('express');
const router = express.Router();

//db.connect();
router.get('/', async function(req, res) { 
    try {
        //put the db query into a service and this file into routes
        let response = await db.query(`SELECT * FROM league_standings;`);
        //res.send(response.rows);
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
    }

});
module.exports = router;