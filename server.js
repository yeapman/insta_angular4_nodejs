"use strict";
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/databasePlumbum';
var UserController = require('./server/UserController');
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('we are connected!');
});
var kotyaraSchema = mongoose.Schema({
  name: String
}, { collection: 'movie' });
var kotyara = mongoose.model('Darcik', kotyaraSchema );

var Imya = new kotyara({ name: 'Darsiiiii'});

Imya.save(function(err, data) {
  if (err) return console.log(err);
  else console.log('Saved: ', data);
});



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


