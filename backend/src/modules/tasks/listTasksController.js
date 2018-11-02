import { Task } from '../../models';

const listTaskController = async (req, res) => {
  try {
    const allTasks = await Task.findAll();
    return res.json(allTasks);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default listTaskController;
