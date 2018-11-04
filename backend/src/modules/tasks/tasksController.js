import { Task } from '../../models';

export const listTasksController = async (req, res) => {
  try {
    const allTasks = await Task.findAll();
    return res.json(allTasks);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const taskDetailController = async (req, res) => {
  try {
    const { id } = req.params;
    const taskById = await Task.findById(id);
    if (!taskById) {
      res.status(404).json({ msg: 'This task does not exist' });
    }
    console.log(taskById);
    return res.json(taskById);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
