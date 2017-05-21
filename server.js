"use strict";
var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/databasePlumbum';
var UserController = require('./server/UserController');
mongoose.connect(url);
var db = mongoose.connection;
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('we are connected!');
});


// /*working schema do add in db*/
// var kotyaraSchema = mongoose.Schema({
//   name: String
// }, { collection: 'movie' });
// var kotyara = mongoose.model('Darcik', kotyaraSchema );
//
// var Imya = new kotyara({ name: 'Darsiiiii'});
//
// Imya.save(function(err, data) {
//   if (err) return console.log(err);
//   else console.log('Saved: ', data);
// });


// var imgPath = 'C:/Users/Admin/Desktop/instaproject/pt/assets/img/imgtest.png';
//
// var schema = new Schema({
//   img: { data: Buffer, contentType: String}
// },  { collection: 'movie' });
// var A = mongoose.model('A', schema);
//
// var images = new A;
// images.img.data = fs.readFileSync(imgPath);
// images.img.contentType = 'image/png';
// images.save(function(err, a) {
//   if(err) throw err;
// else console.log('Saved img: ', a);
// });

app.get('/hello', function(req, res) {
  var collection = db.collection('darciks');
  collection.find().toArray(function(err, items) {
    if(err) {
      res.send(err);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(items)
    }

  })
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

