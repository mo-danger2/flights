"use strict";

var express = require('express');

var router = express.Router();

var flightsCtrl = require('../controllers/flights');

var flight = require('../models/flight'); // GET /movies/new


router.get('/new', flightsCtrl["new"]);
router.post('/', flightsCtrl.create);
module.exports = router;
//# sourceMappingURL=flights.dev.js.map
