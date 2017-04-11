var express = require('express');
var router = express.Router();

var Status = require('../models/status')

Status.methods(['get', 'put', 'post', 'delete'])
Status.register(router, '/status');

router.get('/status', function(req, res){
    res.send('');
});

module.exports = router;