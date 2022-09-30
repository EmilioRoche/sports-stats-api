const express = require('express');
const router = express.Router();
const db = require('../services/db');

router.get('/', async function(req, res) { 
    try {
        //put the db query into a service and this file into routes
        let response = await db.query(`SELECT * FROM cpl_standings ORDER BY position ASC;`);
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
    }

});
module.exports = router;