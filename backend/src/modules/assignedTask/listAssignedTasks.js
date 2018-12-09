import { AssignedTask, Task } from '../../models';
import { getAssignedTask } from './getAssignedTask';

export const listAssignedTasksController = async (req, res) => {
  const assignedTask = await AssignedTask.findAll({
    where: { UserId: req.userId },
    include: [Task, Workflow],
  });
  res.json(assignedTask);
};

export const getAssignedTaskByIdController = async (req, res) => {
  const { id } = req.params;
  const assignedTask = await getAssignedTask(id);
  if (!assignedTask) {
    return res.status(404).json({ msg: `Assigned task not found` });
  }

  return res.json(assignedTask);
};
