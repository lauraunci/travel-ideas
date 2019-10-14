var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;
 
var userSchema = new Schema({
    firstName: String,
    lastName: String,
    googleId: String,
});

module.exports = mongoose.model('User', userSchema);