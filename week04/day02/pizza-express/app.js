// app.js

var express = require('express'); //require express package

var app = express(); //save an express module as 'app'

var port = 3000; //assigns this server to port 3000

app.listen(port, function() {
	console.log("==========================")
 	console.log('LISTENING ON PORT ' + port);
 	console.log("==========================")
});


