var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'XUN' });
});


/* GET hello page. */
router.get('/hello', function(req, res) {
  res.render('hello', { title: 'XUN' });
});

module.exports = router;
