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
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('we are connected!');
});
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
  // db.darciks.find({}, 'name', function (err, docs) {
  //   if (err) console.log(err);
  //   else res.send(docs)
  // });
  var collection = db.collection('darciks');
  collection.find().toArray(function(err, items) {
    if(err) {
      res.send(err);
    } else {
      console.log(items);
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

