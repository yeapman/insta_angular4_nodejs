'use strict';
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = require('./server/User.js');
var url = 'mongodb://localhost:27017/levinsss';
mongoose.connect(url);
var conn = mongoose.connection;
var fs = require('fs');
var dir = './assets/img';


app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9999');

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
conn.on('error', console.error.bind(console, 'connection error: '));
conn.once('open', function() {
  // console.log('we are connected!');
  // var gfs = Grid(conn.db);
  // // streaming to gridfs
  // //filename to store in mongodb
  //
  // var writestream = gfs.createWriteStream({
  //   image: 'imga.png',
  //   content_type: 'image/png',
  //   root: 'loop'
  // });
  //
  // fs.createReadStream('C:/Users/Admin/Desktop/instaproject/pt/assets/img/imga.png').pipe(writestream);
  //
  // writestream.on('close', function(file) {
  //   console.log(file.filename + 'written to DB');
  // });

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

  user.find({}, function(err, users) {
  if (err) throw err;

  res.send(users)
});


  // var collection = conn.collection('darciks');
  // collection.find().toArray(function(err, items) {
  //   if(err) {
  //     res.send(err);
  //   } else {
  //     res.setHeader('Content-Type', 'application/json');
  //     res.send(items)
  //   }
  //
  // })

  // var gfs = Grid(conn.db);
  // gfs.files.find({ filename: 'imga.png' }).toArray(function (err, files) {
  //   if (err) {
  //     throw (err);
  //   }
  //   else {
  //     res.send(files)
  //   }
  // });

  // res.set('Content-Type', 'image/png');

});

app.get('/names', function(req, res) {
   fs.readdir(dir, function (err, files) {
  for (var i=0; i<files.length; i++) {
    var images = files;
    return res.send(JSON.stringify(images.map(items => ({imageUrl: 'http://localhost:3000/assets/img/' + items}))))
  }
});
});

//
// app.get('/picture', function(req, res) {
//   var gfs = Grid(conn.db);
//   var id = mongoose.Types.ObjectId("5922f8306d1bd9197bad31ce");
//   try {
//     var readstream = gfs.createReadStream({ filename: 'imga.png'});
//     res.set('Content-Type', 'image/jpeg');
//     readstream.pipe(res);
//   }
//   catch (err) {
//     log.error(err);
//     return next(errors.create(404, "File not found."));
//   }
//
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/api', api);
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/assets/img', express.static(path.join(__dirname, '/assets/img')));



var port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

server.listen(port, function() {
  console.log('work well, listen on port ' + port);
});

