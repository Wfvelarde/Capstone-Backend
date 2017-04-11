var restful = require('node-restful');
var mongoose = restful.mongoose;

var statusSchema = new ongoose.Schema({
    status: String
});

module.exports = restful.model('Status', statusSchema);