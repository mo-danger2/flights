const Flight = require('../models/flight');


module.exports = {
    new: newFlight,
    create: create,

    
  };


  function newFlight(req, res) {
    res.render('flights/new');
}

async function create(req,res) {
     let incomingData = req.body
  try {
    let savedFlight = await Flight.create({
      airline: req.body.airline, 
      airport: req.body.airport,
      flightNo: req.body.flightNo,
      departs: req.body.depart})
    res.redirect('/flights/new')
  } catch(err) { 
    console.log(err)
    res.send('there was an error')
  }
}


