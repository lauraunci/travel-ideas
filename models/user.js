const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    googleId: String,
});

module.exports = mongoose.model('User', userSchema);