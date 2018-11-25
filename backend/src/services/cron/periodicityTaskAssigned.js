import { Task } from '../../models';

export const checkTasks = async () => {
  const allTasks = await Task.findAll({});
  const date = new Date();

  date.setHours(0, 0, 0, 0, 0);
  //console.log(allTasks);

  console.log(date);
  for (var i in allTasks) {
    allTasks[i].createdAt.setHours(0, 0, 0, 0);
    if (allTasks[i].periodicity == null) {
      continue;
    }
    console.log('task', allTasks[i].createdAt);
    allTasks[i].createdAt.setDate(
      allTasks[i].createdAt.getDate() + allTasks[i].periodicity
    );
    console.log('1', allTasks[i].createdAt);
    console.log('2', date);
    if (allTasks[i].createdAt.getTime() === date.getTime()) {
      // do the job
      console.log('equal => make assigned task');

      try {
      } catch (error) {
        console.error(error);
      }
    }
  }
};
