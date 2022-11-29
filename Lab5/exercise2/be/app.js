const mongoose = require('mongoose')
const Cors = require('cors')
const shortVideos = require('./model/model')

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(Cors())

const atlasURL = 'mongodb+srv://minh-connect-2:1331minh@cluster-m.lzcr9pg.mongodb.net/Reel?retryWrites=true&w=majority'
mongoose.connect(atlasURL, {

})

app.get('/', (req,res) => res.status(200).send('api v2 reel'))

app.post('/v2/posts', (req, res) => {
  const newVideo = req.body
  shortVideos.create(newVideo, (err, data) => {
    if (err) res.status(500).send(err)
    else res.status(201).send(data)
  })
})

app.get('/v2/posts', (req, res) => {
  shortVideos.find((err, data) => {
    if(err) res.status(500).send(err)
    else res.status(200).send(data)
  })
})



app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


//main

module.exports = app;
