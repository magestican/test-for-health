var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var path = require('path');
var request = require('request');

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
app.post('/weather-data', (req, res) => {
  var url = '';
  req.body = {};
  req.body.longitude = '-33.8700308';
  req.body.latitude = '151.2116687';
  if (req.body) {
    url = `https://api.darksky.net/forecast/${process.env.DARK_TOKEN}/${req.body.longitude},${req.body.latitude}`.replace(' ',''); //windows variable picks up the space after the token
    console.info(url);
    request(url, (error, response, body) => {
      if (error) console.error('error:', error);
      console.info('statusCode:', response && response.statusCode);
      res.send(body);
    });
  } else {
    console.error('body not provided')
    res.status = 400;
    res.send();
  }
});
