/* eslint-disable no-undef */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var locationRouter = require('./routes/location-api');
var gameRouter = require('./routes/Game');
var videoRouter = require('./routes/Video');
var playlistRouter = require('./routes/playlist');
var messageRouter = require('./routes/message');
var roomRouter = require('./routes/Room');
const cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(
	cors({
		origin: '*',
	}),
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/locations', locationRouter);
app.use('/games', gameRouter);
app.use('/videos', videoRouter);
app.use('/playlists', playlistRouter);
app.use('/messages', messageRouter);
app.use('/rooms', roomRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

module.exports = app;
