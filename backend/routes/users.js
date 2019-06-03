var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
  // res.send(users)
  res.send("hello");
});

router.get('/:id', function (req, res, next) {
  var id = req.params.id
  var newuser = new User({username : id, password: "abcdefg", image : "https://cdn3.iconfinder.com/data/icons/random-icon-set/512/user-512.png"});
  newuser.save();
  User.find({"username" : id}, function(err,users){
  	if(err) return status(500).send({error:"database failure"});
  	res.json(newuser);
  });
});

router.post('/', function (req, res, next) {
	// console.log(req.body.id);
	res.render("chatroom");
});


module.exports = router;