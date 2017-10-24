var request = require('request');
var weatherData = (req, res) => {
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
}

module.exports = {
  weatherData : weatherData
}
