var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/database', {useMongoClient: true});


module.exports = router;
