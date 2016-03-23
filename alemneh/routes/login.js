'use strict';
let jwt = require('jsonwebtoken');
let User = require('../models/user');
let bcrypt = require('bcrypt');

module.exports = (router) => {
  router.post('/setup', (req, res) => {
    var alem = new User(req.body);

    alem.save((err, user) => {
      if(err) throw err;

      res.json({
        success: true,
        password: user.password
      });
    });
  });

  router.post('/login', (req, res) => {
    let authorizationArray = req.headers.authorization.split(' ');
    let method = authorizationArray[0];
    let base64ed = authorizationArray[1];
    let authArray = new Buffer(base64ed, 'base64').toString().split(':');
    let name = authArray[0];
    let password = authArray[1];
    User.find({name: name}, (err, user) => {
      if(err) throw err;

      if(!user) {
        return res.json({status: 'failure', message: 'Wrong user name!'});
      }
      res.json({
        success: true,
        token: user[0].generateToken()});
    });
  });

}
