var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var tripSchema = new Schema({
    cityName: String,
    countryName: String,
    //googleId: String
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Trip', tripSchema);