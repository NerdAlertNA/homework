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

router.get('/show', function(req, res) {
	res.render('pokemon/show.hbs', {
		pokemon: data
	});
});


// Make a GET route '/index/:index' that will render the Pokemon's show page at that :index
//
// Example: a user goes to 'localhost:3000/pokemon/index/0' in the browser and data for Bulbasaur (the pokemon at index 0) will be displayed.




// Make a GET route '/new' that will simply render a form to create a new Pokemon







//***************************
// CREATE
//***************************
//make a POST route '/' to create a New Pokemon


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