var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,
    {useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false}
);

 // shortcut to mongoose.connection object
 var db = mongoose.connection;
 
 db.on('connected', function() {
 	console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
 });