const express = require('express');
const router = express.Router();
const bundesligaController = require('../../controllers/bundesliga');

router.get('/Standings', bundesligaController.standings);
router.get('/Teams', bundesligaController.teams);
router.get('/Teams/:name', bundesligaController.teamName);
router.get('/:name/Players', bundesligaController.teamPlayers);
module.exports = router;