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

const CRON = process.env.CRON ? process.env.CRON : '* 42 * * * *';

// Start immediately, then on CRON
app.exec();
 
var j = schedule.scheduleJob(CRON, function(){
  app.exec();
  console.log('App.js was executed');
});