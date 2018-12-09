import { Task } from '../../models/';
import { getTaskWithDetails } from './tasksController';
import { saveDocumentInfo } from '../../services/upload/saveDocumentInfo';

const addTasksController = async (req, res) => {
  const {
    title,
    estimatedTime,
    severity,
    description,
    GroupId,
    owners,
    periodicity,
  } = JSON.parse(req.body.data);
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
      periodicity,
      createdById: req.userId,
    });
    if (owners && owners.length) {
      await createdTask.setOwners(owners);
    }
    await saveDocumentInfo(req.files, { TaskId: createdTask.id });

    const task = await getTaskWithDetails(createdTask.id);
    return res.json(task);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Internal task create server error' });
  }
};

export default addTasksController;
