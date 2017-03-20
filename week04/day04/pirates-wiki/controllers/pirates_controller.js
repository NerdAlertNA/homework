var express = require('express');
var router = express.Router();

var piratesArray = require('../models/pirates.js');

router.get('/', function(req, res) { // sets route to index.hbs
	res.render('index.hbs', {
		pirates: piratesArray
	});
});

module.exports = router;