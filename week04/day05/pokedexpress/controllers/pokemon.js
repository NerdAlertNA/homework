//***************************
// REQUIREMENTS
//***************************
var express = require('express');
var router = express.Router();
var data = require('../models/poke_array.js');


//***************************
// READ
//***************************
// Note: All the routes below can be accessed at `localhost:3000/pokemon` + `resource`
// Make a GET route '/' that will render an index page of all pokemon images

router.get('/', function(req, res) {
	res.render('pokemon/index.hbs', {
		pokemon: data
	});
});

router.get('/index/:id', function(req, res) {
	var pokeID = data[req.params.id];

	res.render('pokemon/show', {
		pokemon: pokeID
	});
});

router.get('/new', function(req, res) {
	res.render('pokemon/new');
});

//***************************
// CREATE
//***************************
//make a POST route '/' to create a New Pokemon
router.post('/', function(req, res) {
	var newPokemon = {
		name: req.body.name
	};

	data.push(newPokemon);
	res.redirect('/pokemon');
});

//***************************
// UPDATE
//***************************

//***************************
// DELETE
//***************************
//make a DELETE route '/:index' that will delete the Pokemon at this index.



//***************************
// EXPORTS
//***************************
module.exports = router;