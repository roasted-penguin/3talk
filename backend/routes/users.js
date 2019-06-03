var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
  // res.send(users)
  res.send("hello");
});

router.get('/:id', function (req, res, next) {
  var id = parseInt(req.params.id, 10)
  // var	user = users.filter(function (user) {
  //   return user.id === id
  // });
  // res.send(user)
  res.send("hello");
});

router.post('/', function (req, res, next) {
	// console.log(req.body.id);
	res.render("chatroom");
});


module.exports = router;