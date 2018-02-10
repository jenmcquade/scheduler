const CALL_URL = 'https://o3dv.herokuapp.com';
const http = require('http');
const request = require('request');

module.exports.App = {
  exec() {
    request(CALL_URL, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  }
}

