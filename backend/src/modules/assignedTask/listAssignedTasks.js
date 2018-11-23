import { AssignedTask, Task, Workflow } from '../../models';
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
    where: { id: id },
    include: [{ model: Workflow, where: { AssignedTaskId: id } }, Task],
  });

  res.json(assignedTask);
};
