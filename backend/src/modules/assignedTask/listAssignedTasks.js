import { AssignedTask, Task, Workflow, TaskStatus, User } from '../../models';
export const listAssignedTasksController = async (req, res) => {
  const assignedTask = await AssignedTask.findAll({
    where: { UserId: req.userId },
    include: [Task, Workflow],
  });
  res.json(assignedTask);
};
export const listAssignedTaskByIdController = async (req, res) => {
  const { id } = req.params;
  const assignedTask = await AssignedTask.findOne({
    where: { id: id },
    include: [
      {
        model: Workflow,
        where: { AssignedTaskId: id },
        include: [TaskStatus, { model: User, as: 'submittedBy' }],
      },
      Task,
    ],
  });

  res.json(assignedTask);
};
