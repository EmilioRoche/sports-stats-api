const express = require('express');
const router = express.Router();
const db = require('../services/db');

router.get('/', async function(req, res) { 
    try {
        db.connect();
        //put the db query into a service and this file into routes
        let response = await db.query(`SELECT * FROM prem_standings;`);
        db.end();
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
    }

});
module.exports = router;