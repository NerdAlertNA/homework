// app.js

var express = require('express'); //require express package
var app = express(); //save an express module as 'app'


app.get('/', function(req,res) {
	res.send('Welcome to Pizza Express!');
});

app.get('/topping/:type', function(req, res, next){
	res.send(`${req.params.type} pizza! Good choice`);
});

app.get('/order/:amount/:size', function(req, res, next){
	res.send(`Your order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`);
});


var port = 3000; //assigns this server to port 3000

app.listen(port, function() {
	console.log("==========================")
 	console.log('LISTENING ON PORT ' + port);
 	console.log("==========================")
});


