const Trip = require('../models/trip');

const index = (req, res) => {
    Trip.find({}).exec(function(err, trips) {
        return res.render('trips/index', { trips });
    });
};

const show = (req, res) => {
    Trip.findById(req.params.id, function(err, trip) {
        if (!trip) {
            return res.redirect('/trips');
        }
        res.render('trips/show', { title: "Trip Details", trip});
    });
};

const newTrip = (req, res) => {
    res.render('trips/new', { title: 'Add Trip'});
};

const create = (req, res) => {
   const trip = new Trip(req.body);
   trip.save(function(err) {
       if (err) return res.render('trips/new');
       console.log(trip);
       res.redirect('/trips');
   });
};

module.exports = {
    index,
    show,
    new: newTrip,
    create
};
