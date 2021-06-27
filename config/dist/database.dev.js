"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}); // shortcut to mongoose.connection object

var db = mongoose.connection;
db.on('connected', function () {
  console.log("Connected to MongoDB at ".concat(db.host, ":").concat(db.port));
});
//# sourceMappingURL=database.dev.js.map
