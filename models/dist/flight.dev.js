"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date
}); // Compile the schema into a model and export it

module.exports = mongoose.model('Flight', flightSchema);
//# sourceMappingURL=flight.dev.js.map
