'use strict';
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/s3-assignment');

let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let publicRouter = express.Router();
let apiRouter = express.Router();

require('./routes/login')(publicRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', publicRouter);


app.listen(3000, () => {
  console.log('server on port 3000');
});
