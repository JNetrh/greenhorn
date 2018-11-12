import { Task, Group } from '../../models/';

const addTasksController = async (req, res) => {
  const { title, estimatedTime, severity, description, GroupId } = req.body;
<<<<<<< HEAD

=======
>>>>>>> 7785b672aa32099a087f4b47ed45a8f2758f1e67
  try {
    if (!title || !estimatedTime || !severity) {
      return res
        .status(400)
        .json({ msg: 'Please provide all mandatory fields.' });
    }

    if (GroupId != null) {
      GroupId == null;
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
