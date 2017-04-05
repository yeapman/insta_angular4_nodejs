'use strict';

var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var url = 'mongodb://localhost:27017/client';
// var ObjectId = require('mongodb').ObjectID;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/artist', function(req, res) {
  res.send('hello, bro');
});

module.exports = router;
