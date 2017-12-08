var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let User = mongoose.model('User');
let Post = mongoose.model('Post');


router.post('/users/register', function(req, res, next){
    if(!req.body.username || !req.body.password){
        return res.status(400).json(
          {message: 'Please fill out all fields'});
    }
    var user = new User();
    user.username = req.body.username;
    user.setPassword(req.body.password);
    user.save(function (err){
        if(err){ return next(err); }
        return res.json({token: user.generateJWT()})
    });
  });

  router.post('/users/login', function(req, res, next){
    if(!req.body.username || !req.body.password){
      return res.status(400).json({message: 'Please fill out all fields'});
    }
    passport.authenticate('local', function(err, user, info){
      if(err){ return next(err); }
      if(user){
        console.log("JWT generated");
        return res.json({token: user.generateJWT()});
      } else {
        console.log("JWT not generated");
        return res.status(401).json(info);
      }
    })(req, res, next);
  });
  
  router.post('/users/checkusername', function(req, res, next) {
    // if (req.body.username) {
      User.find({username: req.body.username}, function(err, result) {
        if (result.length) {
          res.json({'username': 'alreadyexists'})
        } else {
          res.json({'username': 'ok'})
        }
      });
    // }
  });

  router.param('user',function(req,res,next, id){
    let query = Post.find({autor: id});
    query.exec(function(err, posts){
        res.json(posts);

    });
  });
  
  module.exports = router;
