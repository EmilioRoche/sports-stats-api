const express = require('express');
const router = express.Router();
const ligaController = require('../../controllers/liga');

router.get('/Standings', ligaController.standings);
router.get('/Teams', ligaController.teams);
router.get('/Teams/:name', ligaController.teamName);
router.get('/:name/Players', ligaController.teamPlayers);
module.exports = router;