'use strict';
let jwt = require('jsonwebtoken');
let User = require('../models/user');
let bcrypt = require('bcrypt');

module.exports = (router) => {
  router.post('/', (req, res) => {
    var alem = new User(req.body);

    alem.save((err, user) => {
      if(err) throw err;

      console.log('User saved successfully!');
      res.json({
        success: true,
        password: user.password
      });
    });
  });

  router.post('/login', (req, res) => {

    User.find({name: req.body.name}, (err, user) => {
      if(err) throw err;
      console.log('in user find');
      if(!user) {
        return res.json({status: 'failure'});
      }
      var token = jwt.sign(user, 'WELCOME');
      console.log('Generated Token!');
      res.json({token: user[0].generateToken()});
    });
  });

}
