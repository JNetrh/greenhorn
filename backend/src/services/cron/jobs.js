var MidnightJob = require('cron').CronJob;
import { checkTask } from './periodicityTaskAssigned';

new MidnightJob(
  '* * * * * *', // 00 00 00 * * *  <= set up for midnight       ////// 00 */1 * * * *
  function() {
    checkTask();
    // other jobs
  },
  null,
  true
);
