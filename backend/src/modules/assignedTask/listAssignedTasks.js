import {
  AssignedTask,
  Task,
  Workflow,
  TaskStatus,
  User,
  Document,
} from '../../models';
export const listAssignedTasksController = async (req, res) => {
  const assignedTask = await AssignedTask.findAll({
    where: { UserId: req.userId },
    include: [Task],
  });
  res.json(assignedTask);
};
export const listAssignedTaskByIdController = async (req, res) => {
  const { id } = req.params;
  const assignedTask = await AssignedTask.findOne({
    where: { id },
    include: [
      {
        model: Workflow,
        include: [TaskStatus, { model: User, as: 'submittedBy' }, Document],
      },
      Task,
    ],
  });
  if (!assignedTask) {
    return res.status(404).json({ msg: `Assigned task not found` });
  }

  return res.json(assignedTask);
};
