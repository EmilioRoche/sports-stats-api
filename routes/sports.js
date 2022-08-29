const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();


//if going to the route localhost:5000/
router.get('/', async function (req, res) {
	const url ='https://sportscore1.p.rapidapi.com/sports';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com',
			'X-RapidAPI-Key': ENV['API_KEY']
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