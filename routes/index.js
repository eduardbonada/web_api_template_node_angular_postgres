var express = require('express');
var router = express.Router();
var db = require('../model/queries.js');

router.get('/api/stations', db.getListStations);
router.get('/api/stations/:id', db.getStationInfo);
//router.get('/api/stations/readings/:id', db.getStationReadings);
//router.get('/api/stations/alarms/:id', db.getStationalarms);
//router.post('/api/puppies', db.createPuppy);
//router.put('/api/puppies/:id', db.updatePuppy);
//router.delete('/api/puppies/:id', db.removePuppy);

module.exports = router;
