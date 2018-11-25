import { Task, User } from '../../models';
import { getTaskWithDetails, canUserEditTask } from './tasksController';

export const taskUpdateController = async (req, res) => {
  const {
    title,
    estimatedTime,
    severity,
    description,
    GroupId,
    owners,
  } = req.body;
  const { id } = req.params;
  try {
    if (!title || !estimatedTime || !severity) {
      return res
        .status(400)
        .json({ msg: 'Please provide all required attributes' });
    }
    const task = await getTaskWithDetails(id);
    if (!task) {
      return res.status(404).json({ msg: 'This task does not exist' });
    }

    if (!canUserEditTask(req, task)) {
      return res.status(401).json({
        msg: 'Cannot update this task. You are not one of the task owners.',
      });
    }
    const updated = await Task.update(
      {
        title,
        estimatedTime,
        severity,
        description,
        GroupId,
      },
      {
        where: {
          id,
        },
      }
    );
    await task.setOwners(owners);
    return res.status(200).json(updated);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Update task failed' });
  }
};
