var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
	var newuser = new User({username :"deokyoung" , password : "qwert12345" });
	newuser.save();
	var userInfo = User.findOne({"username " : "deokyoung"}, function(user){
		res.render("mongo", {userinfo : user.username})
	});

	// res.render("mongo",{userinfo : userInfo});
});

module.exports = router;