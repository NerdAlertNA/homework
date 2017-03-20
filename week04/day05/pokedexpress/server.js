//***************************
// REQUIREMENTS
//***************************
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var hbs = require('hbs');
var pokemonController = require('./controllers/pokemon.js');


//***************************
// MIDDLEWARE
//***************************
//set up your middleware and view engine here
app.set('view engine', 'hbs');
app.use('/pokemon', pokemonController);
app.use(express.static(__dirname + '/public'));

//***************************
// CONTROLLERS
//***************************
//set up your controller for the `/pokemon` resource
//ex: var pokemonController = require('???')


//***************************
// LISTENER
//***************************
app.listen(port, function() {
	console.log('Gotta catch em all on port 3000!')
});
