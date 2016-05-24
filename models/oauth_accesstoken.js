var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OAuthAccessTokensSchema = new Schema({
  accessToken: { type: String, required: true, unique: true },
  clientId: String,
  userId: { type: String, required: true },
  expires: Date
});

mongoose.model('oauth_accesstokens', OAuthAccessTokensSchema);

var OAuthAccessTokensModel = mongoose.model('oauth_accesstokens');

module.exports.getAccessToken = function(bearerToken, callback) {
  OAuthAccessTokensModel.findOne({ accessToken: bearerToken }, callback);
};

module.exports.saveAccessToken = function(token, clientId, expires, userId, callback) {
    console.log(token, clientId, expires, userId)
  var fields = {
    clientId: clientId,
    userId: userId.id,
    expires: expires
  };
    console.log('token....'+JSON.stringify(token))
    console.log('fieids....'+JSON.stringify(fields))

  OAuthAccessTokensModel.update({ accessToken: token }, fields, { upsert: true }, function(err) {
      console.log('err......'+JSON.stringify(err))
    if (err) {
      console.error(err);
    }

    callback(err);
  });
};
