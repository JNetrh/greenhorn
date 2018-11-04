import { Task, Group } from '../../../models';

export const assignTaskToGroup = async (req, res) => {
  const { groupId, taskIds } = req.body;

  if (!Array.isArray(taskIds)) {
    res.status(400).json({ msg: 'tasks has to be an array' });
  }

  const group = await Group.findByPk(groupId);

  if (!group) {
    res.status(400).json({ msg: 'group not found' });
  }

  const tasks = await Task.findAll({
    where: {
      id: taskIds,
    },
  });

  if (!tasks) {
    res.status(400).json({ msg: 'error fetching tasks' });
  }

  await Task.update(
    {
      GroupId: group.id,
    },
    {
      where: {
        id: taskIds,
      },
    }
  );

  const groupTasks = await Group.findByPk(groupId, { include: [Task] });

  res.json(groupTasks);
};
