var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var routes = require('./routes/index');
var data_service = require('./routes/data_service');
var ejs = require('ejs');

var app = express();

app.set('views', path.join(__dirname, 'static/views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, '/static/images', 'favicon.ico')));

app.use('/widgetTemplate/static', express.static('./static'));

app.use('/', routes);
app.use('/data_service', data_service);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Example app listening at http://%s:%s', host, port);
});

server.timeout = 600000;

module.exports = app;
