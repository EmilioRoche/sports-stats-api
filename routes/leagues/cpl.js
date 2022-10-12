const express = require('express');
const router = express.Router();
const db = require('../../services/db');
const cplController = require('../../controllers/cpl');

router.get('/Standings', cplController.standings);
router.get('/Teams', cplController.teams);
router.get('/Teams/:name', cplController.teamName);
router.get('/:name/Players', cplController.teamPlayers);
module.exports = router;