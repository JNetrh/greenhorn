import { Task, User } from '../../models';

export const getTaskWithDetails = id =>
  Task.findById(id, {
    include: [{ model: User, as: 'createdBy' }, { model: User, as: 'owners' }],
  });

export const canUserEditTask = (req, task) => {
  if (req.role === 'hr') {
    return true;
  }
  if (req.role === 'taskowner') {
    const taskOwnersIds = task.owners.map(({ id }) => id);
    if (taskOwnersIds.includes(req.userId)) {
      return true;
    }
  }
};

export const isHrOrTaskOwner = (req, res, next) => {
  if (['hr', 'taskowner'].includes(req.role)) {
    next();
  } else {
    return res
      .status(401)
      .send({
        msg: 'Only HR and task owners can create, edit and delete tasks.',
      });
  }
};

export const listTasksController = async (req, res) => {
  try {
    const allTasks = await Task.findAll({
      include: { model: User, as: 'owners' },
    });
    return res.json(allTasks);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const taskDetailController = async (req, res) => {
  try {
    const { id } = req.params;
    const taskById = await getTaskWithDetails(id);
    if (!taskById) {
      res.status(404).json({ msg: 'This task does not exist' });
    }
    return res.json(taskById);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
