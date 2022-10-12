const express = require('express');
const router = express.Router();
const premController = require('../../controllers/prem');

router.get('/Standings', premController.standings);
router.get('/Teams', premController.teams);
router.get('/Teams/:name', premController.teamName);
router.get('/:name/Players', premController.teamPlayers);
module.exports = router;