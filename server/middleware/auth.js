const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  console.log(req.headers);

  if (Object.keys(req.headers).length === 0) {
    models.Sessions.create()
      .then(function (result) {
        res.cookie(hash, result);
        next();
      })
      .catch(function (error) {
        console.log(error);
      });
  }


};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

