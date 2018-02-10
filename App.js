const APP_URL = 'https://o3dv.herokuapp.com';
const IG_URL = 'https://igdata.herokuapp.com/jonorjen/media?count=1'
const http = require('http');
const request = require('request');

module.exports.App = {
  exec() {
    var timestamp = Date.now();
    var d = new Date(timestamp);
    console.log('App running at:' + d.getDate());

    request(APP_URL, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
    request(IG_URL, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  }
}

