const express = require('express');
const router = express.Router();
const leaguesController = require('../controllers/leagues');

//db.connect();
router.get('/', leaguesController.leagues);
module.exports = router;