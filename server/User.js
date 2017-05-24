var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String
}, {collection: 'levinsss'});

var user = mongoose.model('User', userSchema);
module.exports = user;
