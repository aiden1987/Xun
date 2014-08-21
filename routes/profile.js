var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var userModel = require('../model/profile');

/* View User Profile. http://localhost:3000/profile/view/53ec21ec1bb1a474fa08c7f0/en */
router.get('/view/:user/:lang', function(req, res) {
	mongoose.model('Profile').findOne({ user : req.params.user, language : req.params.lang }, function(err, profile){
		if(err) res.redirect('/');
		//console.log('profile id ' +profile);
		if(!profile) res.redirect('/');
		res.render('viewprofile', { title: 'XUN' , profile : profile});
  });
  
});


/* User Profile API. http://localhost:3000/profile/api/53ec21ec1bb1a474fa08c7f0/en */
router.get('/api/:user/:lang', function(req, res) {
	mongoose.model('Profile').findOne({ user : req.params.user, language : req.params.lang }, function(err, profile){
		if(err) res.redirect('/');
		//console.log('profile id ' +profile);
		if(!profile) res.redirect('/');
		res.send(profile);
  });
  
});

/*
router.get('/view/:user', function(req, res) {
	res.redirect('/profile/view/'+req.params.user+'/en');  
});
*/

module.exports = router;
