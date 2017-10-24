var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var path = require('path');
var apiEndpoints = require('./apiEndpoints');

var options = {
  key: fs.readFileSync(path.join(__dirname, '/ssl/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '/ssl/cert.pem'))
};

var app = express();

console.log(path.join(__dirname,'../client-dist'))
app.use(express.static(path.join(__dirname,'../client-dist')));

app.get('/', (req, res) => {
  console.log('asd');
  res.send();
});

app.get('/', (req, res) => {
  res.send();
});

app.all('/*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// HTTP endpoint
http.createServer(app).listen(80);
// HTTPS endpoint identical to the HTTP endpoint
https.createServer(options, app).listen(443, () => {
  console.log("listening on 443", 'https://localhost:443')
});

// API querying sample from darksky : https://api.darksky.net/forecast/[key]/[latitude],[longitude]
app.post('/weather-data', apiEndpoints.weatherData);
