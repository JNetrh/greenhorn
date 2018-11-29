import { Task } from '../../models/';
import { canUserEditTask, getTaskWithDetails } from './tasksController';

export const deleteTaskById = async id => {
  const deleted = await Task.destroy({ where: { id } });
  return deleted;
};

const deleteTaskController = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res
        .status(400)
        .json({ msg: 'Please provide all mandatory fields.' });
    }
    const task = await getTaskWithDetails(id);
    if (!canUserEditTask(req, task)) {
      return res.status(401).json({
        msg: 'Cannot delete this task. You are not one of the task owners.',
      });
    }
    if (!task) {
      return res
        .status(404)
        .json({ msg: `Task with id "${id}" does not exists.` });
    }
    const deletedTask = await deleteTaskById(id);

    return res.json(deletedTask);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default deleteTaskController;
