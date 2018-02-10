/**
 * Scheduler runs the .exec function of App.js
 * 
 * Unsupported Cron Features
 *   Currently, W (nearest weekday), 
 *   L (last day of month/week), 
 *   and # (nth weekday of the month) are not supported. 
 *   Most other features supported by popular cron implementations 
 *   should work just fine.
 *   cron-parser (npm -i cron-parser) is used to parse crontab instructions.
 */

const schedule = require('node-schedule');
const app = require('./App').App;

const CRON = process.env.CRON ? process.env.CRON : false;
const INTERVAL = process.env.INTERVAL ? process.env.INTERVAL : false;
console.log('CRON is set to: ' + CRON);
console.log('INTERVAL is set to: ' + parseInt(INTERVAL).toString() );

if(!CRON && !INTERVAL) {
  console.log('CRON or INTERVAL missing from `docker run` command! Executing only once...');
}

// Start immediately, then on CRON
app.exec();

if(CRON) {
  var j = schedule.scheduleJob(CRON, function(){
    app.exec();
    console.log('App.js was executed');
  });
}

if(INTERVAL) {
  if(!Number.isInteger(parseInt(INTERVAL))) {
    console.log('Error: INTERVAL is not a number.');
    return false;
  }
  setInterval(function() {
    app.exec();
    console.log('App.js was executed');
  }, ((parseInt(INTERVAL)) * 1000));
}

