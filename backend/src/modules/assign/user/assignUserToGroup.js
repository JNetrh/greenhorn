import { User, Group, Task, AssignedTask } from '../../../models';
import { stripPassword } from '../../../services/password/stripPassword';

export const assignUserToGroup = async (req, res) => {
  const { userId, groupIds } = req.body;

  try {
    const user = await User.findByPk(userId, { include: [Group] });

    const groups = await Group.findAll({
      where: {
        id: groupIds,
      },
    });

    await checkConditions(user, groupIds, groups);

    await updateUserGroups(userId, groupIds);

    const assignedGroups = await User.findByPk(userId, {
      include: [Group, AssignedTask],
    });
    await asignTasksFromGroups(assignedGroups);

    const userWithTasksAndGroups = await User.findByPk(userId, {
      include: [Group, AssignedTask],
    });

    return res.json(userWithTasksAndGroups);
  } catch (error) {
    console.error(error);
    if (Object.hasOwnProperty('status', error)) {
      return res.status(err.status).json(err.error);
    }
    return res.status(500).json(error);
  }
};

// -- HELPERS -- //

const updateUserGroups = (userId, groupIds) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findByPk(userId, { include: [Group] });
      const groups = await Group.findAll({ where: { id: groupIds } });

      const userGroups = user.Groups.map(group => group.id);
      console.log('userGroups: ', userGroups);
      const groupsTodel = user.Groups.filter(
        group => groupIds.indexOf(group.id) < 0
      );
      const groupsToAdd = groups.filter(
        group => userGroups.indexOf(group.id) < 0
      );

      console.log('groupsTodel:', groupsTodel.map(e => e.id));
      console.log('groupsToAdd:', groupsToAdd.map(e => e.id));

      await user.removeGroups(groupsTodel);
      await user.addGroups(groupsToAdd);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

const checkConditions = (user, groupIds, groups) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(groupIds)) {
      reject({ error: { msg: 'groups has to be an array' }, status: 400 });
    }
    if (!user) {
      reject({ error: { msg: 'user not found' }, status: 404 });
    }
    if (!groups) {
      reject({ error: { msg: 'error fetching groups' }, status: 400 });
    }
    resolve();
  });
};

const asignTasksFromGroups = async user => {
  return new Promise(async (resolve, reject) => {
    try {
      const tasks = await Task.findAll({
        where: {
          groupId: user.Groups.map(e => e.id),
        },
      });

      const groupTasks = tasks.map(task => task.id);
      const userTasks = user.AssignedTasks.map(task => task.TaskId);

      const tasksTodel = user.AssignedTasks.filter(
        task => groupTasks.indexOf(task.TaskId) < 0
      );

      const tasksToAdd = tasks.filter(task => userTasks.indexOf(task.id) < 0);

      console.log('tasksTodel:', tasksTodel.map(e => e.id));
      console.log('tasksToAdd:', tasksToAdd.map(e => e.id));

      const assignedTasksToCreate = tasksToAdd.map(task => {
        Date.prototype.addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };

        let until = new Date();

        until = until.addDays(task.estimatedTime);

        return {
          until,
          TaskId: task.id,
          UserId: user.id,
        };
      });

      await AssignedTask.destroy({
        where: { id: tasksTodel.map(e => e.id) },
      });
      await AssignedTask.bulkCreate(assignedTasksToCreate);

      resolve();
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
