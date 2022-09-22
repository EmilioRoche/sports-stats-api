const { response } = require('express');
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const db = require('../db');

//const url1 = 'https://sportscore1.p.rapidapi.com/seasons/18686/standings-tables';


//get it to run on the football page when that url has been hit
router.get('/', async function (req, res) {
	const url = db.get().Collection('football-leagues').findOne({league:"England"});

	res.header("Access-Control-Allow-Origin", "*");
	//res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	//const url = url1;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com',
			'X-RapidAPI-Key': process.env.API_KEY_3
		}
	};
	// fetches the url and gets the response as a json
	fetch(url, options)
		.then(res => res.json())
		.then(json => console.log(json))
		.catch(err => console.error('error:' + err));
	try {
		let response = await fetch(url, options);
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}
});
module.exports = router;