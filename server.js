const express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  console.log(req.headers['user-agent']);
  console.log(req.headers['accept-language']);
  res.end(JSON.stringify(req.headers));
});

app.listen(port, function () {
  console.log('app running on port', port)
});
