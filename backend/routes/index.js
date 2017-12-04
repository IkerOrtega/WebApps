var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let mongoose = require('mongoose');
let Post = mongoose.model('Post');

router.get('/api/posts/',function(req,res,next){

});




module.exports = router;
