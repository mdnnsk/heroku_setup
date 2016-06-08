// require express
var express = require ('express');
// create a new express app
var app = express();
// require path
var path = require('path');

var server = app.listen( process.env.PORT ||  8080, function(){
  console.log('server is listening on port 8080');
});

// base url
app.get('/', function (req, res){
  console.log('base url get');
  res.writeHead(200);
  res.write('we are in the base url');
  res.end();
});
