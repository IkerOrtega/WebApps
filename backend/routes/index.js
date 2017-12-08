var express = require('express');
var router = express.Router();
var app = express();

let mongoose = require('mongoose');
let Post = mongoose.model('Post');

router.get('/posts/',function(req,res,next){
  let query = Post.find().populate("posts");
  query.exec(function( err, posts){
    if (err) return next(err);
    res.json(posts);
  });
});

router.post('/posts/',function(req,res,next){
  let post = new Post(req.body);
  post.save(function(err,rec){
    if (err) { return next(err); }
    res.json(post);
  });
  });

  router.param('post',function(req,res,next, id){
    let query = Post.findById(id);
    query.exec(function(err, post){
      if (err){ return next(err);}
      if(!post){
        return next(new Error('not found' + id));}
        req.post = post;
        return next();

    });
  });

  router.get('/post/:id', function(req,res){
      res.json(req.post);
  });

  router.delete('/post/:id', function(req,res){
    req.post.remove(function(err){
      if(err){ return next(err);}
      res.json("removed post");
    });
});



module.exports = router;
