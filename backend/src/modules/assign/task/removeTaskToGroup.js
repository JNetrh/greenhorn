import { Task, Group } from '../../../models';

export const removeTaskToGroup = async (req, res) => {
  const { groupId, taskIds } = req.body;

  if (!Array.isArray(taskIds)) {
    return res.status(400).json({ msg: 'tasks has to an array' });
  }

  const group = await Group.findByPk(groupId);

  if (!group) {
    return res.status(400).json({ msg: 'group not found' });
  }

  const tasks = await Task.findAll({ where: { id: taskIds } });

  if (!tasks) {
    return res.status(400).json({ msg: 'task fetch failed' });
  }

  await group.removeTasks(tasks);

  const groupTasks = await Group.findByPk(groupId, { include: [Task] });

  return res.json(groupTasks);
};
