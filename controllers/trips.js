const Trip = require('../models/trip');

// const index = (req, res) => {
//     Trip.find({}).exec(function(err, trips) {
//         return res.render('trips/index', { trips });
//     });
// };

const newTrip = (req, res) => {
    res.render('trips/new', { title: 'Add Trip'});
};

const create = (req, res) => {
   const trip = new Trip(req.body);
   trip.save(function(err) {
       if (err) return res.render('trips/new');
       console.log(trip);
       res.redirect('/trips/new');
   });
};

module.exports = {
    new: newTrip,
    create
};
