var CronJob = require('cron').CronJob;

var CronJob = require('cron').CronJob;
new CronJob(
  '00 */2 * * * *', // 00 00 00 * * *  set up for midnight
  function() {
    checkTask();
  },
  null,
  true
);
console.log('After job instantiation');

export const checkTask = () => {
  console.log('ahoj');
};
