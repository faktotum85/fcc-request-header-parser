const express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {

  const ipaddress = req.headers['x-forwarded-for'] || "";
  let language = req.headers['accept-language'] || "";
  if (language) {
    language = language.split(',')[0];
  }
  let software = req.headers['user-agent'] || "";
  if (software) {
    software = software.match(/\(([^\)]*)\)/)[1];
  }
  res.end(JSON.stringify({
    ipaddress: ipaddress,
    language: language,
    software: software
  }));
});

app.listen(port, function () {
  console.log('app running on port', port)
});
