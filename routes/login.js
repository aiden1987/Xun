var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var userModel = require('../model/user');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;




/* use Local Strategy to verify username and password */
/*
passport.use(new LocalStrategy(
  function(username, password, done) {
    mongoose.model('User').findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


router.post('/login', function(req, res) {
  passport.authenticate('local', { successRedirect: '/hello',
                                   failureRedirect: '/login',
                                   failureFlash: true });
});
*/


/* Login. */
router.post('/', function(req, res) {
  console.log('username : '+req.body.username);
  var username = req.body.username;
  var password = req.body.password;
  /* use Local Strategy to verify username and password */
  mongoose.model('User').find({username : username, password: password}, 
	function(err, user){
		if(err) res.redirect('/');
		res.send(user);
  });
});


module.exports = router;
