"use strict";
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/databasePlumbum';
var mongoclient = require('mongodb').MongoClient,
  assert = require('assert');
var UserController = require('./server/UserController');
mongoose.connect(url);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/api', api);
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/users', UserController);

var port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

server.listen(port, function() {
  console.log('work well, listen on port ' + port);
});


