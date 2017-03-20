//packages
var express = require('express'); // set to use express package
var app = express(); // calls the express package
var hbs = require('hbs'); // set to use the hbs package
// var logger = require('morgan'); // set to use the morgan package
// var bodyParser = require('body-parser'); //set to use the body-parser package.
var piratesController = require(__dirname + '/controllers/pirates_controller.js'); // set to use the pirates.js controller file.
// var piratesController = require('./controllers/pirates.js'); // controller is the same as above*

//app settings
var port = process.env.PORT || 3000; // sets the port

//views
app.set('view engine', 'hbs');

app.use('/pirates', piratesController); // calls the pirates files for use.




app.listen(port, function() { // allows the server to run on the provided port
	console.log('The pirates are sailing into port 3000');
});