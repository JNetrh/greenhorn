import { Task, Group } from '../../models/';

const addTasksController = async (req, res) => {
  const {
    title,
    estimatedTime,
    severity,
    description,
    GroupId,
    owners,
  } = req.body;
  try {
    if (!title || !estimatedTime || !severity) {
      return res
        .status(400)
        .json({ msg: 'Please provide all mandatory fields.' });
    }

    const createdTask = await Task.create({
      title,
      estimatedTime,
      severity,
      description,
      GroupId,
      createdById: req.userId,
    });
    if (owners && owners.length) {
      await createdTask.setOwners(owners);
    }

    const task = await Task.findByPk(createdTask.id);
    return res.json(task);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Internal task create server error' });
  }
};

export default addTasksController;
