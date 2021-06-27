"use strict";

var Flight = require('../models/flight');

module.exports = {
  "new": newFlight,
  create: create
};

function newFlight(req, res) {
  res.render('flights/new');
}

function create(req, res) {
  var incomingData, savedFlight;
  return regeneratorRuntime.async(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          incomingData = req.body;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Flight.create({
            airline: req.body.airline,
            airport: req.body.airport,
            flightNo: req.body.flightNo,
            departs: req.body.depart
          }));

        case 4:
          savedFlight = _context.sent;
          res.redirect('/flights/new');
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.send('there was an error');

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}
//# sourceMappingURL=flights.dev.js.map
