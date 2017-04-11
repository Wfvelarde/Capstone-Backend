var restful = require('node-restful');
var mongoose = restful.mongoose;

var statusSchema = new mongoose.Schema({
    status: String
});

module.exports = restful.model('Status', statusSchema);