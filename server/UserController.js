'use strict';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('./User');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/lol', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var pass = req.body.password;
  res.send(name + " gg " + email + " nogg " + pass );



 // var receives = User(
 //    {
 //      name: req.body.name,
 //      email: req.body.email,
 //      password: req.body.password
 //    },
 //    function (err, user) {
 //      if (err) return res.status(500).send("There were a problem adding the information to the database.");
 //      res.status(200).send(user);
 //    });


});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function(err, users) {

  User.find({}, function(err, users) {
    if (err) return res.status(500).send("There was a problem finding the users. ");
      res.status(200).send(users);
  });
});

router.get('/hello', function(req, res) {
  res.send('hello, hello, hello ');
});


module.exports = router;
