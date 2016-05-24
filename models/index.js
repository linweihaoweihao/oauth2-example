var config = require('./../config');
var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017");

module.exports.oauth = require('./oauth');
module.exports.User = require('./user');
module.exports.OAuthClientsModel = require('./oauth_client');
module.exports.mongoose = mongoose;
