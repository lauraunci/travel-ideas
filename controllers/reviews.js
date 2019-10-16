const Trip = require('../models/trip');

const create = (req, res) => {
  Trip.findById(req.params.id, function(err, trip) {
    trip.reviews.push(req.body);
    trip.save(function(err) {
      res.redirect(`/trips/${trip.id}`);
    });
  });
};

const deleteReview = (req, res) => {
  Trip.findById(req.params.id, function(err, trip) {
    const review = trip.reviews.id(req.params.review_id);
    if (!review) {
      return res.redirect(`/trips/${trip.id}`);
    }

    review.remove();
    trip.save(function(err) {
      return res.redirect(`/trips/${trip.id}`);
    });
  });
};

module.exports = {
  create,
  delete: deleteReview
};