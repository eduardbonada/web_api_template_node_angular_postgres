/*
  Setup DB and queries to it
*/

// use bluebird promises
var promise = require('bluebird');

// Initialization Options
var options = {
  promiseLib: promise
};

// create and configure postgres handler
var pgp = require('pg-promise')(options);
var db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'database',
    user: 'postgres',
    password: 'password'
});

/*
  List of functions with queries to the DB
*/

// Get a list of stations
function getList(req, res, next) {
  db.any('SELECT * FROM "Elements"')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved the list of elements'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getList: getList,
};