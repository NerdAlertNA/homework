var express = require('express')
var app = express()

var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))


app.use(express.static(process.argv[3]))

app.get('/home', function(req, res){
	res.end('Hello World!')
})

app.post('/form', function(req, res){
	res.end(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])