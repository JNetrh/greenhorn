import { Task, Group } from '../../../models';

export const assignTaskToGroup = async (req, res) => {
  const { groupId, taskIds } = req.body;

  try {
    const group = await Group.findByPk(groupId, { include: [Task] });

    const tasks = await Task.findAll({
      where: {
        id: taskIds,
      },
    });

    await checkConditions(group, taskIds, tasks).catch(err =>
      res.status(err.status).json(err.error)
    );

    await updateGroupTasks(group, taskIds).catch(err =>
      res.status(500).json(err)
    );

    const groupTasks = await Group.findByPk(groupId, { include: [Task] });

    return res.json(groupTasks);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// -- HELPERS -- //

const updateGroupTasks = async (group, taskIds) => {
  const currTasks = group.Tasks.map(task => task.id);
  const newTasks = taskIds;

  return new Promise(async (resolve, reject) => {
    try {
      await Task.update(
        {
          GroupId: null,
        },
        {
          where: {
            id: currTasks,
          },
        }
      );
      await Task.update(
        {
          GroupId: group.id,
        },
        {
          where: {
            id: newTasks,
          },
        }
      );
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

const checkConditions = (group, taskIds, tasks) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(taskIds)) {
      reject({ error: { msg: 'tasks has to be an array' }, status: 400 });
    }
    if (!group) {
      reject({ error: { msg: 'group not found' }, status: 404 });
    }
    if (!tasks) {
      reject({ error: { msg: 'error fetching tasks' }, status: 400 });
    }
    resolve();
  });
};
