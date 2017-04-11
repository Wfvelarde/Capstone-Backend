var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/rest');

var app = express();

app.get('/', function(req, res){
    res.send('working');
});

app.listen(3000);
console.log('API is running on 3000');