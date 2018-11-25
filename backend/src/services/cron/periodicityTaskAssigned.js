import { Task } from '../../models';

export const checkTask = async () => {
  const allTasks = await Task.findAll({});
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  console.log('Datum', date);
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
      try {
      } catch (error) {
        console.error(error);
      }
    }
  }
};
