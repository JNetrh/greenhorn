import { TASKS } from '../../mockups/mockTasks';

const addTasksController = async (req, res) => {
  try {
    return res.json(TASKS[0]);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default addTasksController;
