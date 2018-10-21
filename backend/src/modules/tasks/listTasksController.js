import { TASKS } from '../../mockups/mockTasks';

const listTaskController = async (req, res) => {
  try {
    return res.json({
      TASKS,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default listTaskController;
