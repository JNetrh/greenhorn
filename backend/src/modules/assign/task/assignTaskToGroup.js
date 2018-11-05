import { Task, Group } from '../../../models';

export const assignTaskToGroup = async (req, res) => {
  const { groupId, taskIds } = req.body;

  try {
    if (!Array.isArray(taskIds)) {
      return res.status(400).json({ msg: 'tasks has to be an array' });
    }

    const group = await Group.findByPk(groupId);
    if (!group) {
      return res.status(404).json({ msg: 'group not found' });
    }

    const tasks = await Task.findAll({
      where: {
        id: taskIds,
      },
    });

    if (!tasks) {
      return res.status(400).json({ msg: 'error fetching tasks' });
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

    return res.json(groupTasks);
  } catch (error) {
    return res.status(500).json(error);
  }
};
