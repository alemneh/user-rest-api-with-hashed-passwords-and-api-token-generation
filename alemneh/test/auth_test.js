'use strict';
require('../server');
let mongoose = require('mongoose');
let chai = require('chai');
let chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
let request = chai.request;
let expect = chai.expect;
let User = require('../models/user');






describe('RESTful API Token', function() {

  it('should be able to create a new user and password', function(done) {
    chai.request('localhost:3000')
      .post('/public/setup')
      .send({name:'alem', password:'password'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.success).to.eql(true);
        expect(res.body.password).to.exist;
        done();
      });
  });

  it('should be able to provide a token for a authenticated user', function(done) {
    chai.request('localhost:3000')
      .post('/public/login')
      .auth('alem', 'password')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.success).to.eql(true);
        expect(res.body.token).to.exist;
        done();
      });
  });

});
