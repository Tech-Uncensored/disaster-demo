var createError = require('http-errors');
var express = require('express');
const Sentry = require('@sentry/node');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const passport = require("passport")
const flash = require('express-flash')
const session = require("express-session")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

require('./initalizers/passport')(passport)

var app = express();

Sentry.init({ dsn: 'https://cba033986c0740c3a7c6e2b73cc9427b@o433502.ingest.sentry.io/5388777' });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(Sentry.Handlers.requestHandler());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// middlewares

//express session
app.use(session({
  secret: 'ABC123',
  resave: true,
  saveUninitialized: true
}))

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//express flash
app.use(flash())

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  next()
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(Sentry.Handlers.errorHandler());
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
