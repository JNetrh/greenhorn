var MidnightJob = require('cron').CronJob;
import { checkTasks } from './periodicityTaskAssigned';

new MidnightJob(
  '00 00 00 * * *', // 00 00 00 * * *  <= set up for midnight       ////// 00 */1 * * * *
  function() {
    checkTasks();
    // other jobs
  },
  null,
  true
);
