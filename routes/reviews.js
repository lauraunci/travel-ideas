const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/trips/:id/reviews', reviewsCtrl.create);
router.get('/trips/:id/reviews/:review_id', reviewsCtrl.delete);

module.exports = router;