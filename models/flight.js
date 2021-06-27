const mongoose = require('mongoose');

const Schema = mongoose.Schema;
	
const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);