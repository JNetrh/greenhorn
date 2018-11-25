import { Task, User } from '../../models';

var CronJob = require('cron').CronJob;
new CronJob(
  '* * * * * *', // 00 00 00 * * *  <= set up for midnight       ////// 00 */1 * * * *
  function() {
    checkTask();
  },
  null,
  true
);

export const checkTask = async () => {
  const allTasks = await Task.findAll({});
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  //console.log('Datum', date);
  // console.log(allTasks);

  for (var i in allTasks) {
    allTasks[i].createdAt.setHours(0, 0, 0, 0);
    if (allTasks[i].periodicity == null) {
      continue;
    }
    console.log('task', allTasks[i].createdAt);
    //console.log(allTasks[i].periodicity);
    date.setDate(date.getDate() + allTasks[i].periodicity);
    console.log('date', date);
    if (allTasks[i].createdAt.getTime() === date.getTime()) {
      // do the job
    }
  }
};
