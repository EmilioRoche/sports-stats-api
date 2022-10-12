const express = require('express');
const router = express.Router();
const ligueController = require('../../controllers/ligue');

router.get('/Standings', ligueController.standings);
router.get('/Teams', ligueController.teams);
router.get('/Teams/:name', ligueController.teamName);
router.get('/:name/Players', ligueController.teamPlayers);
module.exports = router;