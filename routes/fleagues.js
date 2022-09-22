const { response } = require('express');
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

//get it to run on the main page
router.get('/', async function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	const url = url1;
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