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

export const checkTask = () => {
  console.log('ahoj');
};
