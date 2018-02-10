const http = require('http');
const request = require('request');
const env = require('./env');

if(!env.APP_URL || !env.SERVICE_URL) {
  console.log('env.APP_URL: ' + env.APP_URL + ', env.SERVICE_URL: ' + env.SERVICE_URL);
  return;
}

module.exports.App = {
  exec() {
    request(env.APP_URL, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
    request(env.SERVICE_URL, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  },


}

