var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var userModel = require('../model/user');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



passport.use(new LocalStrategy(

  function(username, password, done) {
  console.log('abce');
	
    mongoose.model('User').findOne({ username: username, password: password }, function(err, user) {
      if (err) { return done(err); }
      
	  console.log(user);
      return done(null, user);
    });
	
  }
));

passport.serializeUser(function(user, done) {  
console.log('seri');
done(null, user);
}); 
passport.deserializeUser(function(user, done) {  done(null, user);});


router.post('/', 
  passport.authenticate('local', { successRedirect: '/hello' ,
                                   failureRedirect: '/' })
);


/* GET hello page. */
router.get('/hello', function(req, res) {
  res.render('hello', { title: 'XUN' , user : req.user});
});



/* Login. */
/*
router.post('/', function(req, res) {
  console.log('username : '+req.body.username);
  var username = req.body.username;
  var password = req.body.password;
  // use Local Strategy to verify username and password 
  mongoose.model('User').find({username : username, password: password}, 
	function(err, user){
		if(err) res.redirect('/');
		res.send(user);
  });
});
*/

module.exports = router;
