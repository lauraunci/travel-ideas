var express = require('express');
var router = express.Router();
var tripsCtrl = require('../controllers/trips');


router.get('/', tripsCtrl.index);
router.get('/new', tripsCtrl.new);
router.get('/:id', tripsCtrl.show);
router.post('/', tripsCtrl.create);
router.get('/delete/:id', tripsCtrl.deleteTrip);

module.exports = router;