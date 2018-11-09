import { Task } from '../../models/';

const addTasksController = async (req, res) => {
  const { title, estimatedTime, severity, description, GroupId } = req.body;
  try {
    if (!title || !estimatedTime || !severity) {
      return res
        .status(400)
        .json({ msg: 'Please provide all mandatory fields.' });
    }

    const createTask = await Task.create({
      title,
      estimatedTime,
      severity,
      description,
      GroupId,
      createdById: req.userId,
    });

    return res.json(createTask);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Internal task create server error' });
  }
};

export default addTasksController;
