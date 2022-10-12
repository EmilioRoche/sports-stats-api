const express = require('express');
const router = express.Router();
const serieController = require('../../controllers/serie');

router.get('/Standings', serieController.standings);
router.get('/Teams', serieController.teams);
router.get('/Teams/:name', serieController.teamName);
router.get('/:name/Players', serieController.teamPlayers);
module.exports = router;