'use strict';
// process.env.MONGO_URI='mongodb://localhost:27017/s3-test';
require('../server');
let mongoose = require('mongoose');
let chai = require('chai');
let chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
let request = chai.request;
let expect = chai.expect;
let User = require('../models/user');






describe('RESTful API', function() {

  // after(function(done) {
  //   mongoose.connection.db.dropDatabase(function() {
  //     done();
  //   });
  // });

  it('should be able to create a new user', function(done) {
    chai.request('localhost:3000')
      .post('/public')
      .auth('alem','password')
      .end(function(err, res) {
        expect(err).to.eql(null);
        // expect(res.body.name).to.eql('test');
        // expect(res.body).to.have.property('_id');
        done();
      });
  });

  it('should be able to create a new user', function(done) {
    chai.request('localhost:3000')
      .post('/public/login')
      .auth('alem','password')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.name).to.eql('test');
        expect(res.body).to.have.property('_id');
        done();
      });
  });






});
