var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');
const flight = require('../models/flight');

// GET /movies/new
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);


module.exports = router;


