var express = require('express');
var path = require('path');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');

const port = '3000';

require('./config/passport');



//To connect to the database
mongoose.connect(process.env.MONGODB_URI, {useMongoClient:true});




//To be able to use the Post Schema
require('./models/Post');
require('./models/User');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/dist'));

app.all('*', (req, res) => {
  const indexFile = `${path.join(__dirname, 'dist')}/index.html`;
  res.status(200).sendFile(indexFile);
}); 

app.get('/', (request, response) => {
  response.json({
      message: 'hello world'
  })
}); 

app.use(passport.initialize());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/api', index);
app.use('/api', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log("App listening at port: " + port);
});

module.exports = app;
