const express = require('express');
const router = express.Router();

const prem = require('./leagues/prem');
const bundes = require('./leagues/bundes');
const liga = require('./leagues/liga');
const ligue = require('./leagues/ligue');
const serie = require('./leagues/serie');
const cpl = require('./leagues/cpl');
const leagues = require('./leagues');

/*we set it as default blank since we want it to load the sports list right away and will use this later on*/
//router.use('/',sports);
//standings
router.use('/Football/Prem', prem);
router.use('/Football/LaLiga', liga);
router.use('/Football/Bundesliga', bundes);
router.use('/Football/Ligue1', ligue);
router.use('/Football/CPL', cpl);
router.use('/Football/SerieA', serie);
router.use('/Football/Leagues', leagues);

module.exports = router;