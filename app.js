var express = require('express')
var fs = require('fs')
var app = express()

app.get('/', function(req, res){
	var buffer = fs.readFileSync('index.html')
	res.send(buffer.toString());
});

app.listen(8080)
console.log('Listening on port 8080')
