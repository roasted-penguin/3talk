var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
	// var newuser = new User({username :"yoojeong" , password : "qwert12345" });
	// newuser.save();
	// var userInfo = User.find(function(user){
	// 	console.log(user);
	// 	res.render("mongo", {userinfo : "nothing"});
	// });
	// var userInfo = User.findOne({"username" : "deokyoung"});
	// console.log(userInfo);
	// res.render("mongo",{userinfo : userInfo.username});


	User.find({username : "yoojeong"},function(err,users){
		if(err) return status(500).send({error:"database failure"});
		// console.log(users.username);
		res.json(users);
	});
});

module.exports = router;